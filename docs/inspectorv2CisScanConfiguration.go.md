# `inspectorv2CisScanConfiguration` Submodule <a name="`inspectorv2CisScanConfiguration` Submodule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspectorv2CisScanConfiguration <a name="Inspectorv2CisScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration awscc_inspectorv2_cis_scan_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

inspectorv2cisscanconfiguration.NewInspectorv2CisScanConfiguration(scope Construct, id *string, config Inspectorv2CisScanConfigurationConfig) Inspectorv2CisScanConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig">Inspectorv2CisScanConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig">Inspectorv2CisScanConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putSchedule"></a>

```go
func PutSchedule(value Inspectorv2CisScanConfigurationSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a>

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putTargets"></a>

```go
func PutTargets(value Inspectorv2CisScanConfigurationTargets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a>

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Inspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

inspectorv2cisscanconfiguration.Inspectorv2CisScanConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

inspectorv2cisscanconfiguration.Inspectorv2CisScanConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

inspectorv2cisscanconfiguration.Inspectorv2CisScanConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

inspectorv2cisscanconfiguration.Inspectorv2CisScanConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Inspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Inspectorv2CisScanConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Inspectorv2CisScanConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Inspectorv2CisScanConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference">Inspectorv2CisScanConfigurationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference">Inspectorv2CisScanConfigurationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanNameInput">ScanNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevelInput">SecurityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanName">ScanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.schedule"></a>

```go
func Schedule() Inspectorv2CisScanConfigurationScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference">Inspectorv2CisScanConfigurationScheduleOutputReference</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targets"></a>

```go
func Targets() Inspectorv2CisScanConfigurationTargetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference">Inspectorv2CisScanConfigurationTargetsOutputReference</a>

---

##### `ScanNameInput`<sup>Optional</sup> <a name="ScanNameInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanNameInput"></a>

```go
func ScanNameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevelInput"></a>

```go
func SecurityLevelInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `ScanName`<sup>Required</sup> <a name="ScanName" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanName"></a>

```go
func ScanName() *string
```

- *Type:* *string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevel"></a>

```go
func SecurityLevel() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Inspectorv2CisScanConfigurationConfig <a name="Inspectorv2CisScanConfigurationConfig" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

&inspectorv2cisscanconfiguration.Inspectorv2CisScanConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ScanName: *string,
	Schedule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule,
	SecurityLevel: *string,
	Targets: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.scanName">ScanName</a></code> | <code>*string</code> | Name of the scan. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a></code> | Choose a Schedule cadence. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.securityLevel">SecurityLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#security_level Inspectorv2CisScanConfiguration#security_level}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#targets Inspectorv2CisScanConfiguration#targets}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#tags Inspectorv2CisScanConfiguration#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ScanName`<sup>Required</sup> <a name="ScanName" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.scanName"></a>

```go
ScanName *string
```

- *Type:* *string

Name of the scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#scan_name Inspectorv2CisScanConfiguration#scan_name}

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.schedule"></a>

```go
Schedule Inspectorv2CisScanConfigurationSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a>

Choose a Schedule cadence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#schedule Inspectorv2CisScanConfiguration#schedule}

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.securityLevel"></a>

```go
SecurityLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#security_level Inspectorv2CisScanConfiguration#security_level}.

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.targets"></a>

```go
Targets Inspectorv2CisScanConfigurationTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#targets Inspectorv2CisScanConfiguration#targets}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#tags Inspectorv2CisScanConfiguration#tags}.

---

### Inspectorv2CisScanConfigurationSchedule <a name="Inspectorv2CisScanConfigurationSchedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

&inspectorv2cisscanconfiguration.Inspectorv2CisScanConfigurationSchedule {
	Daily: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily,
	Monthly: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly,
	OneTime: *string,
	Weekly: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.daily">Daily</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#daily Inspectorv2CisScanConfiguration#daily}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.monthly">Monthly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#monthly Inspectorv2CisScanConfiguration#monthly}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.oneTime">OneTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#one_time Inspectorv2CisScanConfiguration#one_time}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.weekly">Weekly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#weekly Inspectorv2CisScanConfiguration#weekly}. |

---

##### `Daily`<sup>Optional</sup> <a name="Daily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.daily"></a>

```go
Daily Inspectorv2CisScanConfigurationScheduleDaily
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#daily Inspectorv2CisScanConfiguration#daily}.

---

##### `Monthly`<sup>Optional</sup> <a name="Monthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.monthly"></a>

```go
Monthly Inspectorv2CisScanConfigurationScheduleMonthly
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#monthly Inspectorv2CisScanConfiguration#monthly}.

---

##### `OneTime`<sup>Optional</sup> <a name="OneTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.oneTime"></a>

```go
OneTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#one_time Inspectorv2CisScanConfiguration#one_time}.

---

##### `Weekly`<sup>Optional</sup> <a name="Weekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.weekly"></a>

```go
Weekly Inspectorv2CisScanConfigurationScheduleWeekly
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#weekly Inspectorv2CisScanConfiguration#weekly}.

---

### Inspectorv2CisScanConfigurationScheduleDaily <a name="Inspectorv2CisScanConfigurationScheduleDaily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

&inspectorv2cisscanconfiguration.Inspectorv2CisScanConfigurationScheduleDaily {
	StartTime: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}. |

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily.property.startTime"></a>

```go
StartTime Inspectorv2CisScanConfigurationScheduleDailyStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}.

---

### Inspectorv2CisScanConfigurationScheduleDailyStartTime <a name="Inspectorv2CisScanConfigurationScheduleDailyStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

&inspectorv2cisscanconfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime {
	TimeOfDay: *string,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeOfDay">TimeOfDay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}. |

---

##### `TimeOfDay`<sup>Optional</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeOfDay"></a>

```go
TimeOfDay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}.

---

### Inspectorv2CisScanConfigurationScheduleMonthly <a name="Inspectorv2CisScanConfigurationScheduleMonthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

&inspectorv2cisscanconfiguration.Inspectorv2CisScanConfigurationScheduleMonthly {
	Day: *string,
	StartTime: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.day">Day</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#day Inspectorv2CisScanConfiguration#day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.day"></a>

```go
Day *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#day Inspectorv2CisScanConfiguration#day}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.startTime"></a>

```go
StartTime Inspectorv2CisScanConfigurationScheduleMonthlyStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}.

---

### Inspectorv2CisScanConfigurationScheduleMonthlyStartTime <a name="Inspectorv2CisScanConfigurationScheduleMonthlyStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

&inspectorv2cisscanconfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime {
	TimeOfDay: *string,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeOfDay">TimeOfDay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}. |

---

##### `TimeOfDay`<sup>Optional</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeOfDay"></a>

```go
TimeOfDay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}.

---

### Inspectorv2CisScanConfigurationScheduleWeekly <a name="Inspectorv2CisScanConfigurationScheduleWeekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

&inspectorv2cisscanconfiguration.Inspectorv2CisScanConfigurationScheduleWeekly {
	Days: *[]*string,
	StartTime: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.days">Days</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#days Inspectorv2CisScanConfiguration#days}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.days"></a>

```go
Days *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#days Inspectorv2CisScanConfiguration#days}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.startTime"></a>

```go
StartTime Inspectorv2CisScanConfigurationScheduleWeeklyStartTime
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}.

---

### Inspectorv2CisScanConfigurationScheduleWeeklyStartTime <a name="Inspectorv2CisScanConfigurationScheduleWeeklyStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

&inspectorv2cisscanconfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime {
	TimeOfDay: *string,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeOfDay">TimeOfDay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}. |

---

##### `TimeOfDay`<sup>Optional</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeOfDay"></a>

```go
TimeOfDay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}.

---

### Inspectorv2CisScanConfigurationTargets <a name="Inspectorv2CisScanConfigurationTargets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

&inspectorv2cisscanconfiguration.Inspectorv2CisScanConfigurationTargets {
	AccountIds: *[]*string,
	TargetResourceTags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#account_ids Inspectorv2CisScanConfiguration#account_ids}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.targetResourceTags">TargetResourceTags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#target_resource_tags Inspectorv2CisScanConfiguration#target_resource_tags}. |

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.accountIds"></a>

```go
AccountIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#account_ids Inspectorv2CisScanConfiguration#account_ids}.

---

##### `TargetResourceTags`<sup>Required</sup> <a name="TargetResourceTags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.targetResourceTags"></a>

```go
TargetResourceTags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#target_resource_tags Inspectorv2CisScanConfiguration#target_resource_tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspectorv2CisScanConfigurationScheduleDailyOutputReference <a name="Inspectorv2CisScanConfigurationScheduleDailyOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

inspectorv2cisscanconfiguration.NewInspectorv2CisScanConfigurationScheduleDailyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Inspectorv2CisScanConfigurationScheduleDailyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.putStartTime"></a>

```go
func PutStartTime(value Inspectorv2CisScanConfigurationScheduleDailyStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a>

---

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime"></a>

```go
func StartTime() Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference <a name="Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

inspectorv2cisscanconfiguration.NewInspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeOfDay">ResetTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeOfDay` <a name="ResetTimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeOfDay"></a>

```go
func ResetTimeOfDay()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDayInput">TimeOfDayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeOfDayInput`<sup>Optional</sup> <a name="TimeOfDayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDayInput"></a>

```go
func TimeOfDayInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay"></a>

```go
func TimeOfDay() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference <a name="Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

inspectorv2cisscanconfiguration.NewInspectorv2CisScanConfigurationScheduleMonthlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.putStartTime"></a>

```go
func PutStartTime(value Inspectorv2CisScanConfigurationScheduleMonthlyStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

---

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetDay"></a>

```go
func ResetDay()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.dayInput">DayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime"></a>

```go
func StartTime() Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a>

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.dayInput"></a>

```go
func DayInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() interface{}
```

- *Type:* interface{}

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference <a name="Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

inspectorv2cisscanconfiguration.NewInspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeOfDay">ResetTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeOfDay` <a name="ResetTimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeOfDay"></a>

```go
func ResetTimeOfDay()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDayInput">TimeOfDayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeOfDayInput`<sup>Optional</sup> <a name="TimeOfDayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDayInput"></a>

```go
func TimeOfDayInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay"></a>

```go
func TimeOfDay() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Inspectorv2CisScanConfigurationScheduleOutputReference <a name="Inspectorv2CisScanConfigurationScheduleOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

inspectorv2cisscanconfiguration.NewInspectorv2CisScanConfigurationScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Inspectorv2CisScanConfigurationScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putDaily">PutDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putMonthly">PutMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putWeekly">PutWeekly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetDaily">ResetDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetMonthly">ResetMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetOneTime">ResetOneTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetWeekly">ResetWeekly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDaily` <a name="PutDaily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putDaily"></a>

```go
func PutDaily(value Inspectorv2CisScanConfigurationScheduleDaily)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putDaily.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a>

---

##### `PutMonthly` <a name="PutMonthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putMonthly"></a>

```go
func PutMonthly(value Inspectorv2CisScanConfigurationScheduleMonthly)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a>

---

##### `PutWeekly` <a name="PutWeekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putWeekly"></a>

```go
func PutWeekly(value Inspectorv2CisScanConfigurationScheduleWeekly)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a>

---

##### `ResetDaily` <a name="ResetDaily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetDaily"></a>

```go
func ResetDaily()
```

##### `ResetMonthly` <a name="ResetMonthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetMonthly"></a>

```go
func ResetMonthly()
```

##### `ResetOneTime` <a name="ResetOneTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetOneTime"></a>

```go
func ResetOneTime()
```

##### `ResetWeekly` <a name="ResetWeekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetWeekly"></a>

```go
func ResetWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.daily">Daily</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference">Inspectorv2CisScanConfigurationScheduleDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthly">Monthly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weekly">Weekly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.dailyInput">DailyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthlyInput">MonthlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTimeInput">OneTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weeklyInput">WeeklyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime">OneTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Daily`<sup>Required</sup> <a name="Daily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.daily"></a>

```go
func Daily() Inspectorv2CisScanConfigurationScheduleDailyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference">Inspectorv2CisScanConfigurationScheduleDailyOutputReference</a>

---

##### `Monthly`<sup>Required</sup> <a name="Monthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthly"></a>

```go
func Monthly() Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a>

---

##### `Weekly`<sup>Required</sup> <a name="Weekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weekly"></a>

```go
func Weekly() Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a>

---

##### `DailyInput`<sup>Optional</sup> <a name="DailyInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.dailyInput"></a>

```go
func DailyInput() interface{}
```

- *Type:* interface{}

---

##### `MonthlyInput`<sup>Optional</sup> <a name="MonthlyInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthlyInput"></a>

```go
func MonthlyInput() interface{}
```

- *Type:* interface{}

---

##### `OneTimeInput`<sup>Optional</sup> <a name="OneTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTimeInput"></a>

```go
func OneTimeInput() *string
```

- *Type:* *string

---

##### `WeeklyInput`<sup>Optional</sup> <a name="WeeklyInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weeklyInput"></a>

```go
func WeeklyInput() interface{}
```

- *Type:* interface{}

---

##### `OneTime`<sup>Required</sup> <a name="OneTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime"></a>

```go
func OneTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference <a name="Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

inspectorv2cisscanconfiguration.NewInspectorv2CisScanConfigurationScheduleWeeklyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.putStartTime"></a>

```go
func PutStartTime(value Inspectorv2CisScanConfigurationScheduleWeeklyStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

---

##### `ResetDays` <a name="ResetDays" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetDays"></a>

```go
func ResetDays()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.daysInput">DaysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days">Days</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime"></a>

```go
func StartTime() Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a>

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.daysInput"></a>

```go
func DaysInput() *[]*string
```

- *Type:* *[]*string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() interface{}
```

- *Type:* interface{}

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days"></a>

```go
func Days() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference <a name="Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

inspectorv2cisscanconfiguration.NewInspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeOfDay">ResetTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeOfDay` <a name="ResetTimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeOfDay"></a>

```go
func ResetTimeOfDay()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDayInput">TimeOfDayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeOfDayInput`<sup>Optional</sup> <a name="TimeOfDayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDayInput"></a>

```go
func TimeOfDayInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay"></a>

```go
func TimeOfDay() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Inspectorv2CisScanConfigurationTargetsOutputReference <a name="Inspectorv2CisScanConfigurationTargetsOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/inspectorv2cisscanconfiguration"

inspectorv2cisscanconfiguration.NewInspectorv2CisScanConfigurationTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Inspectorv2CisScanConfigurationTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTagsInput">TargetResourceTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags">TargetResourceTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIdsInput"></a>

```go
func AccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetResourceTagsInput`<sup>Optional</sup> <a name="TargetResourceTagsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTagsInput"></a>

```go
func TargetResourceTagsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds"></a>

```go
func AccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `TargetResourceTags`<sup>Required</sup> <a name="TargetResourceTags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags"></a>

```go
func TargetResourceTags() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



