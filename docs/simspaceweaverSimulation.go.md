# `simspaceweaverSimulation` Submodule <a name="`simspaceweaverSimulation` Submodule" id="@cdktn/provider-awscc.simspaceweaverSimulation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SimspaceweaverSimulation <a name="SimspaceweaverSimulation" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/simspaceweaver_simulation awscc_simspaceweaver_simulation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/simspaceweaversimulation"

simspaceweaversimulation.NewSimspaceweaverSimulation(scope Construct, id *string, config SimspaceweaverSimulationConfig) SimspaceweaverSimulation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig">SimspaceweaverSimulationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig">SimspaceweaverSimulationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location">PutSchemaS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location">PutSnapshotS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetMaximumDuration">ResetMaximumDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSchemaS3Location">ResetSchemaS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSnapshotS3Location">ResetSnapshotS3Location</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchemaS3Location` <a name="PutSchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location"></a>

```go
func PutSchemaS3Location(value SimspaceweaverSimulationSchemaS3Location)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

---

##### `PutSnapshotS3Location` <a name="PutSnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location"></a>

```go
func PutSnapshotS3Location(value SimspaceweaverSimulationSnapshotS3Location)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

---

##### `ResetMaximumDuration` <a name="ResetMaximumDuration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetMaximumDuration"></a>

```go
func ResetMaximumDuration()
```

##### `ResetSchemaS3Location` <a name="ResetSchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSchemaS3Location"></a>

```go
func ResetSchemaS3Location()
```

##### `ResetSnapshotS3Location` <a name="ResetSnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSnapshotS3Location"></a>

```go
func ResetSnapshotS3Location()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SimspaceweaverSimulation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/simspaceweaversimulation"

simspaceweaversimulation.SimspaceweaverSimulation_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/simspaceweaversimulation"

simspaceweaversimulation.SimspaceweaverSimulation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/simspaceweaversimulation"

simspaceweaversimulation.SimspaceweaverSimulation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/simspaceweaversimulation"

simspaceweaversimulation.SimspaceweaverSimulation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SimspaceweaverSimulation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SimspaceweaverSimulation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SimspaceweaverSimulation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/simspaceweaver_simulation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SimspaceweaverSimulation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.describePayload">DescribePayload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3Location">SchemaS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference">SimspaceweaverSimulationSchemaS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3Location">SnapshotS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference">SimspaceweaverSimulationSnapshotS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDurationInput">MaximumDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3LocationInput">SchemaS3LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3LocationInput">SnapshotS3LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDuration">MaximumDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescribePayload`<sup>Required</sup> <a name="DescribePayload" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.describePayload"></a>

```go
func DescribePayload() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SchemaS3Location`<sup>Required</sup> <a name="SchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3Location"></a>

```go
func SchemaS3Location() SimspaceweaverSimulationSchemaS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference">SimspaceweaverSimulationSchemaS3LocationOutputReference</a>

---

##### `SnapshotS3Location`<sup>Required</sup> <a name="SnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3Location"></a>

```go
func SnapshotS3Location() SimspaceweaverSimulationSnapshotS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference">SimspaceweaverSimulationSnapshotS3LocationOutputReference</a>

---

##### `MaximumDurationInput`<sup>Optional</sup> <a name="MaximumDurationInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDurationInput"></a>

```go
func MaximumDurationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SchemaS3LocationInput`<sup>Optional</sup> <a name="SchemaS3LocationInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3LocationInput"></a>

```go
func SchemaS3LocationInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotS3LocationInput`<sup>Optional</sup> <a name="SnapshotS3LocationInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3LocationInput"></a>

```go
func SnapshotS3LocationInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumDuration`<sup>Required</sup> <a name="MaximumDuration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDuration"></a>

```go
func MaximumDuration() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SimspaceweaverSimulationConfig <a name="SimspaceweaverSimulationConfig" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/simspaceweaversimulation"

&simspaceweaversimulation.SimspaceweaverSimulationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RoleArn: *string,
	MaximumDuration: *string,
	SchemaS3Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location,
	SnapshotS3Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the simulation. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Role ARN. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.maximumDuration">MaximumDuration</a></code> | <code>*string</code> | The maximum running time of the simulation. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.schemaS3Location">SchemaS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/simspaceweaver_simulation#schema_s3_location SimspaceweaverSimulation#schema_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.snapshotS3Location">SnapshotS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/simspaceweaver_simulation#snapshot_s3_location SimspaceweaverSimulation#snapshot_s3_location}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/simspaceweaver_simulation#name SimspaceweaverSimulation#name}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/simspaceweaver_simulation#role_arn SimspaceweaverSimulation#role_arn}

---

##### `MaximumDuration`<sup>Optional</sup> <a name="MaximumDuration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.maximumDuration"></a>

```go
MaximumDuration *string
```

- *Type:* *string

The maximum running time of the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/simspaceweaver_simulation#maximum_duration SimspaceweaverSimulation#maximum_duration}

---

##### `SchemaS3Location`<sup>Optional</sup> <a name="SchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.schemaS3Location"></a>

```go
SchemaS3Location SimspaceweaverSimulationSchemaS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/simspaceweaver_simulation#schema_s3_location SimspaceweaverSimulation#schema_s3_location}.

---

##### `SnapshotS3Location`<sup>Optional</sup> <a name="SnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.snapshotS3Location"></a>

```go
SnapshotS3Location SimspaceweaverSimulationSnapshotS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/simspaceweaver_simulation#snapshot_s3_location SimspaceweaverSimulation#snapshot_s3_location}.

---

### SimspaceweaverSimulationSchemaS3Location <a name="SimspaceweaverSimulationSchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/simspaceweaversimulation"

&simspaceweaversimulation.SimspaceweaverSimulationSchemaS3Location {
	BucketName: *string,
	ObjectKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.bucketName">BucketName</a></code> | <code>*string</code> | The Schema S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.objectKey">ObjectKey</a></code> | <code>*string</code> | This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The Schema S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/simspaceweaver_simulation#bucket_name SimspaceweaverSimulation#bucket_name}

---

##### `ObjectKey`<sup>Optional</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.objectKey"></a>

```go
ObjectKey *string
```

- *Type:* *string

This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/simspaceweaver_simulation#object_key SimspaceweaverSimulation#object_key}

---

### SimspaceweaverSimulationSnapshotS3Location <a name="SimspaceweaverSimulationSnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/simspaceweaversimulation"

&simspaceweaversimulation.SimspaceweaverSimulationSnapshotS3Location {
	BucketName: *string,
	ObjectKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.bucketName">BucketName</a></code> | <code>*string</code> | The Schema S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.objectKey">ObjectKey</a></code> | <code>*string</code> | This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The Schema S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/simspaceweaver_simulation#bucket_name SimspaceweaverSimulation#bucket_name}

---

##### `ObjectKey`<sup>Optional</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.objectKey"></a>

```go
ObjectKey *string
```

- *Type:* *string

This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/simspaceweaver_simulation#object_key SimspaceweaverSimulation#object_key}

---

## Classes <a name="Classes" id="Classes"></a>

### SimspaceweaverSimulationSchemaS3LocationOutputReference <a name="SimspaceweaverSimulationSchemaS3LocationOutputReference" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/simspaceweaversimulation"

simspaceweaversimulation.NewSimspaceweaverSimulationSchemaS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SimspaceweaverSimulationSchemaS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetObjectKey">ResetObjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetObjectKey` <a name="ResetObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetObjectKey"></a>

```go
func ResetObjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKeyInput">ObjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey">ObjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `ObjectKeyInput`<sup>Optional</sup> <a name="ObjectKeyInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKeyInput"></a>

```go
func ObjectKeyInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey"></a>

```go
func ObjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SimspaceweaverSimulationSnapshotS3LocationOutputReference <a name="SimspaceweaverSimulationSnapshotS3LocationOutputReference" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/simspaceweaversimulation"

simspaceweaversimulation.NewSimspaceweaverSimulationSnapshotS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SimspaceweaverSimulationSnapshotS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetObjectKey">ResetObjectKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetObjectKey` <a name="ResetObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetObjectKey"></a>

```go
func ResetObjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKeyInput">ObjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey">ObjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `ObjectKeyInput`<sup>Optional</sup> <a name="ObjectKeyInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKeyInput"></a>

```go
func ObjectKeyInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `ObjectKey`<sup>Required</sup> <a name="ObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey"></a>

```go
func ObjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



