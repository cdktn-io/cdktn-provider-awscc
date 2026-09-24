# `gluePartition` Submodule <a name="`gluePartition` Submodule" id="@cdktn/provider-awscc.gluePartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GluePartition <a name="GluePartition" id="@cdktn/provider-awscc.gluePartition.GluePartition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition awscc_glue_partition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

gluepartition.NewGluePartition(scope Construct, id *string, config GluePartitionConfig) GluePartition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig">GluePartitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.gluePartition.GluePartition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig">GluePartitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput">PutPartitionInput</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.gluePartition.GluePartition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gluePartition.GluePartition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.gluePartition.GluePartition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gluePartition.GluePartition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.gluePartition.GluePartition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.gluePartition.GluePartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.gluePartition.GluePartition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.gluePartition.GluePartition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.gluePartition.GluePartition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.gluePartition.GluePartition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.gluePartition.GluePartition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gluePartition.GluePartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.gluePartition.GluePartition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.gluePartition.GluePartition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gluePartition.GluePartition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPartitionInput` <a name="PutPartitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput"></a>

```go
func PutPartitionInput(value GluePartitionPartitionInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartition.putPartitionInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GluePartition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.gluePartition.GluePartition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

gluepartition.GluePartition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gluePartition.GluePartition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

gluepartition.GluePartition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

gluepartition.GluePartition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gluePartition.GluePartition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

gluepartition.GluePartition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GluePartition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GluePartition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GluePartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GluePartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.identifierPartitionInputValues">IdentifierPartitionInputValues</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInput">PartitionInput</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference">GluePartitionPartitionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInputInput">PartitionInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentifierPartitionInputValues`<sup>Required</sup> <a name="IdentifierPartitionInputValues" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.identifierPartitionInputValues"></a>

```go
func IdentifierPartitionInputValues() *string
```

- *Type:* *string

---

##### `PartitionInput`<sup>Required</sup> <a name="PartitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInput"></a>

```go
func PartitionInput() GluePartitionPartitionInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference">GluePartitionPartitionInputOutputReference</a>

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PartitionInputInput`<sup>Optional</sup> <a name="PartitionInputInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.partitionInputInput"></a>

```go
func PartitionInputInput() interface{}
```

- *Type:* interface{}

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.gluePartition.GluePartition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GluePartitionConfig <a name="GluePartitionConfig" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

&gluepartition.GluePartitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CatalogId: *string,
	DatabaseName: *string,
	PartitionInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.gluePartition.GluePartitionPartitionInput,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.catalogId">CatalogId</a></code> | <code>*string</code> | The name of the catalog database in which to create the partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | The AWS account ID of the catalog in which the partion is to be created. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.partitionInput">PartitionInput</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a></code> | The structure used to create and update a partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.tableName">TableName</a></code> | <code>*string</code> | The name of the metadata table in which the partition is to be created. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

The name of the catalog database in which to create the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#catalog_id GluePartition#catalog_id}

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

The AWS account ID of the catalog in which the partion is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#database_name GluePartition#database_name}

---

##### `PartitionInput`<sup>Required</sup> <a name="PartitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.partitionInput"></a>

```go
PartitionInput GluePartitionPartitionInput
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput">GluePartitionPartitionInput</a>

The structure used to create and update a partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#partition_input GluePartition#partition_input}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.gluePartition.GluePartitionConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The name of the metadata table in which the partition is to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#table_name GluePartition#table_name}

---

### GluePartitionPartitionInput <a name="GluePartitionPartitionInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

&gluepartition.GluePartitionPartitionInput {
	Values: *[]*string,
	Parameters: *string,
	StorageDescriptor: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.values">Values</a></code> | <code>*[]*string</code> | The values of the partition. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.parameters">Parameters</a></code> | <code>*string</code> | Key-value pairs defining partition parameters. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a></code> | Provides information about the physical location where the partition is stored. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The values of the partition.

Although this parameter is not required by the SDK, you must specify this parameter for a valid input. The values for the keys for the new partition must be passed as an array of String objects that must be ordered in the same order as the partition keys appearing in the Amazon S3 prefix. Otherwise AWS Glue will add the values to the wrong keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#values GluePartition#values}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Key-value pairs defining partition parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

##### `StorageDescriptor`<sup>Optional</sup> <a name="StorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInput.property.storageDescriptor"></a>

```go
StorageDescriptor GluePartitionPartitionInputStorageDescriptor
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

Provides information about the physical location where the partition is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#storage_descriptor GluePartition#storage_descriptor}

---

### GluePartitionPartitionInputStorageDescriptor <a name="GluePartitionPartitionInputStorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

&gluepartition.GluePartitionPartitionInputStorageDescriptor {
	BucketColumns: *[]*string,
	Columns: interface{},
	Compressed: interface{},
	InputFormat: *string,
	Location: *string,
	NumberOfBuckets: *f64,
	OutputFormat: *string,
	Parameters: *string,
	SchemaReference: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference,
	SerdeInfo: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo,
	SkewedInfo: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo,
	SortColumns: interface{},
	StoredAsSubDirectories: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.bucketColumns">BucketColumns</a></code> | <code>*[]*string</code> | A list of reducer grouping columns, clustering columns, and bucketing columns in the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.columns">Columns</a></code> | <code>interface{}</code> | A list of the Columns in the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.compressed">Compressed</a></code> | <code>interface{}</code> | True if the data in the table is compressed, or False if not. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.inputFormat">InputFormat</a></code> | <code>*string</code> | The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.location">Location</a></code> | <code>*string</code> | The physical location of the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.numberOfBuckets">NumberOfBuckets</a></code> | <code>*f64</code> | The number of buckets. You must specify this property if the partition contains any dimension columns. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.parameters">Parameters</a></code> | <code>*string</code> | The user-supplied properties in key-value form. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.schemaReference">SchemaReference</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a></code> | An object that references a schema stored in the AWS Glue Schema Registry. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.serdeInfo">SerdeInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a></code> | The serialization/deserialization (SerDe) information. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.skewedInfo">SkewedInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a></code> | The information about values that appear frequently in a column (skewed values). |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.sortColumns">SortColumns</a></code> | <code>interface{}</code> | A list specifying the sort order of each bucket in the table. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.storedAsSubDirectories">StoredAsSubDirectories</a></code> | <code>interface{}</code> | True if the table data is stored in subdirectories, or False if not. |

---

##### `BucketColumns`<sup>Optional</sup> <a name="BucketColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.bucketColumns"></a>

```go
BucketColumns *[]*string
```

- *Type:* *[]*string

A list of reducer grouping columns, clustering columns, and bucketing columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#bucket_columns GluePartition#bucket_columns}

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.columns"></a>

```go
Columns interface{}
```

- *Type:* interface{}

A list of the Columns in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#columns GluePartition#columns}

---

##### `Compressed`<sup>Optional</sup> <a name="Compressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.compressed"></a>

```go
Compressed interface{}
```

- *Type:* interface{}

True if the data in the table is compressed, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#compressed GluePartition#compressed}

---

##### `InputFormat`<sup>Optional</sup> <a name="InputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.inputFormat"></a>

```go
InputFormat *string
```

- *Type:* *string

The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#input_format GluePartition#input_format}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.location"></a>

```go
Location *string
```

- *Type:* *string

The physical location of the table.

By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#location GluePartition#location}

---

##### `NumberOfBuckets`<sup>Optional</sup> <a name="NumberOfBuckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.numberOfBuckets"></a>

```go
NumberOfBuckets *f64
```

- *Type:* *f64

The number of buckets. You must specify this property if the partition contains any dimension columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#number_of_buckets GluePartition#number_of_buckets}

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.outputFormat"></a>

```go
OutputFormat *string
```

- *Type:* *string

The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#output_format GluePartition#output_format}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

The user-supplied properties in key-value form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

##### `SchemaReference`<sup>Optional</sup> <a name="SchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.schemaReference"></a>

```go
SchemaReference GluePartitionPartitionInputStorageDescriptorSchemaReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

An object that references a schema stored in the AWS Glue Schema Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_reference GluePartition#schema_reference}

---

##### `SerdeInfo`<sup>Optional</sup> <a name="SerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.serdeInfo"></a>

```go
SerdeInfo GluePartitionPartitionInputStorageDescriptorSerdeInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

The serialization/deserialization (SerDe) information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#serde_info GluePartition#serde_info}

---

##### `SkewedInfo`<sup>Optional</sup> <a name="SkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.skewedInfo"></a>

```go
SkewedInfo GluePartitionPartitionInputStorageDescriptorSkewedInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

The information about values that appear frequently in a column (skewed values).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_info GluePartition#skewed_info}

---

##### `SortColumns`<sup>Optional</sup> <a name="SortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.sortColumns"></a>

```go
SortColumns interface{}
```

- *Type:* interface{}

A list specifying the sort order of each bucket in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#sort_columns GluePartition#sort_columns}

---

##### `StoredAsSubDirectories`<sup>Optional</sup> <a name="StoredAsSubDirectories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor.property.storedAsSubDirectories"></a>

```go
StoredAsSubDirectories interface{}
```

- *Type:* interface{}

True if the table data is stored in subdirectories, or False if not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#stored_as_sub_directories GluePartition#stored_as_sub_directories}

---

### GluePartitionPartitionInputStorageDescriptorColumns <a name="GluePartitionPartitionInputStorageDescriptorColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

&gluepartition.GluePartitionPartitionInputStorageDescriptorColumns {
	Comment: *string,
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.comment">Comment</a></code> | <code>*string</code> | A free-form text comment. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.name">Name</a></code> | <code>*string</code> | The name of the Column. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.type">Type</a></code> | <code>*string</code> | The data type of the Column. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

A free-form text comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#comment GluePartition#comment}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#name GluePartition#name}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumns.property.type"></a>

```go
Type *string
```

- *Type:* *string

The data type of the Column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#type GluePartition#type}

---

### GluePartitionPartitionInputStorageDescriptorSchemaReference <a name="GluePartitionPartitionInputStorageDescriptorSchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

&gluepartition.GluePartitionPartitionInputStorageDescriptorSchemaReference {
	SchemaId: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId,
	SchemaVersionId: *string,
	SchemaVersionNumber: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaId">SchemaId</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a></code> | A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionId">SchemaVersionId</a></code> | <code>*string</code> | The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionNumber">SchemaVersionNumber</a></code> | <code>*f64</code> | The version number of the schema. |

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaId"></a>

```go
SchemaId GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

A structure that contains schema identity fields. Either this or the SchemaVersionId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_id GluePartition#schema_id}

---

##### `SchemaVersionId`<sup>Optional</sup> <a name="SchemaVersionId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionId"></a>

```go
SchemaVersionId *string
```

- *Type:* *string

The unique ID assigned to a version of the schema. Either this or the SchemaId has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_version_id GluePartition#schema_version_id}

---

##### `SchemaVersionNumber`<sup>Optional</sup> <a name="SchemaVersionNumber" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference.property.schemaVersionNumber"></a>

```go
SchemaVersionNumber *f64
```

- *Type:* *f64

The version number of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_version_number GluePartition#schema_version_number}

---

### GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId <a name="GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

&gluepartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId {
	RegistryName: *string,
	SchemaArn: *string,
	SchemaName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.registryName">RegistryName</a></code> | <code>*string</code> | The name of the schema registry that contains the schema. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaArn">SchemaArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaName">SchemaName</a></code> | <code>*string</code> | The name of the schema. One of SchemaArn or SchemaName has to be provided. |

---

##### `RegistryName`<sup>Optional</sup> <a name="RegistryName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.registryName"></a>

```go
RegistryName *string
```

- *Type:* *string

The name of the schema registry that contains the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#registry_name GluePartition#registry_name}

---

##### `SchemaArn`<sup>Optional</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaArn"></a>

```go
SchemaArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_arn GluePartition#schema_arn}

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

The name of the schema. One of SchemaArn or SchemaName has to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#schema_name GluePartition#schema_name}

---

### GluePartitionPartitionInputStorageDescriptorSerdeInfo <a name="GluePartitionPartitionInputStorageDescriptorSerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

&gluepartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo {
	Name: *string,
	Parameters: *string,
	SerializationLibrary: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.name">Name</a></code> | <code>*string</code> | Name of the SerDe. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.parameters">Parameters</a></code> | <code>*string</code> | These key-value pairs define initialization parameters for the SerDe. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.serializationLibrary">SerializationLibrary</a></code> | <code>*string</code> | Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#name GluePartition#name}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

These key-value pairs define initialization parameters for the SerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#parameters GluePartition#parameters}

---

##### `SerializationLibrary`<sup>Optional</sup> <a name="SerializationLibrary" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo.property.serializationLibrary"></a>

```go
SerializationLibrary *string
```

- *Type:* *string

Usually the class that implements the SerDe. An example is org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#serialization_library GluePartition#serialization_library}

---

### GluePartitionPartitionInputStorageDescriptorSkewedInfo <a name="GluePartitionPartitionInputStorageDescriptorSkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

&gluepartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo {
	SkewedColumnNames: *[]*string,
	SkewedColumnValueLocationMaps: *string,
	SkewedColumnValues: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnNames">SkewedColumnNames</a></code> | <code>*[]*string</code> | A list of values that appear so frequently as to be considered skewed. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps">SkewedColumnValueLocationMaps</a></code> | <code>*string</code> | A mapping of skewed values to the columns that contain them. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValues">SkewedColumnValues</a></code> | <code>*[]*string</code> | A list of names of columns that contain skewed values. |

---

##### `SkewedColumnNames`<sup>Optional</sup> <a name="SkewedColumnNames" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

```go
SkewedColumnNames *[]*string
```

- *Type:* *[]*string

A list of values that appear so frequently as to be considered skewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_names GluePartition#skewed_column_names}

---

##### `SkewedColumnValueLocationMaps`<sup>Optional</sup> <a name="SkewedColumnValueLocationMaps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

```go
SkewedColumnValueLocationMaps *string
```

- *Type:* *string

A mapping of skewed values to the columns that contain them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_value_location_maps GluePartition#skewed_column_value_location_maps}

---

##### `SkewedColumnValues`<sup>Optional</sup> <a name="SkewedColumnValues" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

```go
SkewedColumnValues *[]*string
```

- *Type:* *[]*string

A list of names of columns that contain skewed values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#skewed_column_values GluePartition#skewed_column_values}

---

### GluePartitionPartitionInputStorageDescriptorSortColumns <a name="GluePartitionPartitionInputStorageDescriptorSortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

&gluepartition.GluePartitionPartitionInputStorageDescriptorSortColumns {
	Column: *string,
	SortOrder: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.column">Column</a></code> | <code>*string</code> | The name of the column. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.sortOrder">SortOrder</a></code> | <code>*f64</code> | Indicates that the column is sorted in ascending order (== 1), or in descending order (==0). |

---

##### `Column`<sup>Optional</sup> <a name="Column" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.column"></a>

```go
Column *string
```

- *Type:* *string

The name of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#column GluePartition#column}

---

##### `SortOrder`<sup>Optional</sup> <a name="SortOrder" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumns.property.sortOrder"></a>

```go
SortOrder *f64
```

- *Type:* *f64

Indicates that the column is sorted in ascending order (== 1), or in descending order (==0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/glue_partition#sort_order GluePartition#sort_order}

---

## Classes <a name="Classes" id="Classes"></a>

### GluePartitionPartitionInputOutputReference <a name="GluePartitionPartitionInputOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

gluepartition.NewGluePartitionPartitionInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GluePartitionPartitionInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor">PutStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetStorageDescriptor">ResetStorageDescriptor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStorageDescriptor` <a name="PutStorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor"></a>

```go
func PutStorageDescriptor(value GluePartitionPartitionInputStorageDescriptor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptor">GluePartitionPartitionInputStorageDescriptor</a>

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetStorageDescriptor` <a name="ResetStorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.resetStorageDescriptor"></a>

```go
func ResetStorageDescriptor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference">GluePartitionPartitionInputStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptorInput">StorageDescriptorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageDescriptor`<sup>Required</sup> <a name="StorageDescriptor" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptor"></a>

```go
func StorageDescriptor() GluePartitionPartitionInputStorageDescriptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference">GluePartitionPartitionInputStorageDescriptorOutputReference</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `StorageDescriptorInput`<sup>Optional</sup> <a name="StorageDescriptorInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.storageDescriptorInput"></a>

```go
func StorageDescriptorInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GluePartitionPartitionInputStorageDescriptorColumnsList <a name="GluePartitionPartitionInputStorageDescriptorColumnsList" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

gluepartition.NewGluePartitionPartitionInputStorageDescriptorColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GluePartitionPartitionInputStorageDescriptorColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.get"></a>

```go
func Get(index *f64) GluePartitionPartitionInputStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GluePartitionPartitionInputStorageDescriptorColumnsOutputReference <a name="GluePartitionPartitionInputStorageDescriptorColumnsOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

gluepartition.NewGluePartitionPartitionInputStorageDescriptorColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GluePartitionPartitionInputStorageDescriptorColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GluePartitionPartitionInputStorageDescriptorOutputReference <a name="GluePartitionPartitionInputStorageDescriptorOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

gluepartition.NewGluePartitionPartitionInputStorageDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GluePartitionPartitionInputStorageDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putColumns">PutColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference">PutSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo">PutSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo">PutSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSortColumns">PutSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetBucketColumns">ResetBucketColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetColumns">ResetColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetCompressed">ResetCompressed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetInputFormat">ResetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetNumberOfBuckets">ResetNumberOfBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSchemaReference">ResetSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSerdeInfo">ResetSerdeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSkewedInfo">ResetSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSortColumns">ResetSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetStoredAsSubDirectories">ResetStoredAsSubDirectories</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumns` <a name="PutColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putColumns"></a>

```go
func PutColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchemaReference` <a name="PutSchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference"></a>

```go
func PutSchemaReference(value GluePartitionPartitionInputStorageDescriptorSchemaReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSchemaReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReference">GluePartitionPartitionInputStorageDescriptorSchemaReference</a>

---

##### `PutSerdeInfo` <a name="PutSerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo"></a>

```go
func PutSerdeInfo(value GluePartitionPartitionInputStorageDescriptorSerdeInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSerdeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfo">GluePartitionPartitionInputStorageDescriptorSerdeInfo</a>

---

##### `PutSkewedInfo` <a name="PutSkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo"></a>

```go
func PutSkewedInfo(value GluePartitionPartitionInputStorageDescriptorSkewedInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSkewedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfo">GluePartitionPartitionInputStorageDescriptorSkewedInfo</a>

---

##### `PutSortColumns` <a name="PutSortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSortColumns"></a>

```go
func PutSortColumns(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.putSortColumns.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBucketColumns` <a name="ResetBucketColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetBucketColumns"></a>

```go
func ResetBucketColumns()
```

##### `ResetColumns` <a name="ResetColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetColumns"></a>

```go
func ResetColumns()
```

##### `ResetCompressed` <a name="ResetCompressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetCompressed"></a>

```go
func ResetCompressed()
```

##### `ResetInputFormat` <a name="ResetInputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetInputFormat"></a>

```go
func ResetInputFormat()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetNumberOfBuckets` <a name="ResetNumberOfBuckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetNumberOfBuckets"></a>

```go
func ResetNumberOfBuckets()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetOutputFormat"></a>

```go
func ResetOutputFormat()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetSchemaReference` <a name="ResetSchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSchemaReference"></a>

```go
func ResetSchemaReference()
```

##### `ResetSerdeInfo` <a name="ResetSerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSerdeInfo"></a>

```go
func ResetSerdeInfo()
```

##### `ResetSkewedInfo` <a name="ResetSkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSkewedInfo"></a>

```go
func ResetSkewedInfo()
```

##### `ResetSortColumns` <a name="ResetSortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetSortColumns"></a>

```go
func ResetSortColumns()
```

##### `ResetStoredAsSubDirectories` <a name="ResetStoredAsSubDirectories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.resetStoredAsSubDirectories"></a>

```go
func ResetStoredAsSubDirectories()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList">GluePartitionPartitionInputStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReference">SchemaReference</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfo">SerdeInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfo">SkewedInfo</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumns">SortColumns</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList">GluePartitionPartitionInputStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumnsInput">BucketColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressedInput">CompressedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormatInput">InputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBucketsInput">NumberOfBucketsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReferenceInput">SchemaReferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfoInput">SerdeInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfoInput">SkewedInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumnsInput">SortColumnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput">StoredAsSubDirectoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumns">BucketColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressed">Compressed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormat">InputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBuckets">NumberOfBuckets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectories">StoredAsSubDirectories</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columns"></a>

```go
func Columns() GluePartitionPartitionInputStorageDescriptorColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorColumnsList">GluePartitionPartitionInputStorageDescriptorColumnsList</a>

---

##### `SchemaReference`<sup>Required</sup> <a name="SchemaReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReference"></a>

```go
func SchemaReference() GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference</a>

---

##### `SerdeInfo`<sup>Required</sup> <a name="SerdeInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfo"></a>

```go
func SerdeInfo() GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference</a>

---

##### `SkewedInfo`<sup>Required</sup> <a name="SkewedInfo" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfo"></a>

```go
func SkewedInfo() GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference">GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference</a>

---

##### `SortColumns`<sup>Required</sup> <a name="SortColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumns"></a>

```go
func SortColumns() GluePartitionPartitionInputStorageDescriptorSortColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList">GluePartitionPartitionInputStorageDescriptorSortColumnsList</a>

---

##### `BucketColumnsInput`<sup>Optional</sup> <a name="BucketColumnsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumnsInput"></a>

```go
func BucketColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.columnsInput"></a>

```go
func ColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `CompressedInput`<sup>Optional</sup> <a name="CompressedInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressedInput"></a>

```go
func CompressedInput() interface{}
```

- *Type:* interface{}

---

##### `InputFormatInput`<sup>Optional</sup> <a name="InputFormatInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormatInput"></a>

```go
func InputFormatInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NumberOfBucketsInput`<sup>Optional</sup> <a name="NumberOfBucketsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBucketsInput"></a>

```go
func NumberOfBucketsInput() *f64
```

- *Type:* *f64

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormatInput"></a>

```go
func OutputFormatInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `SchemaReferenceInput`<sup>Optional</sup> <a name="SchemaReferenceInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.schemaReferenceInput"></a>

```go
func SchemaReferenceInput() interface{}
```

- *Type:* interface{}

---

##### `SerdeInfoInput`<sup>Optional</sup> <a name="SerdeInfoInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.serdeInfoInput"></a>

```go
func SerdeInfoInput() interface{}
```

- *Type:* interface{}

---

##### `SkewedInfoInput`<sup>Optional</sup> <a name="SkewedInfoInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```go
func SkewedInfoInput() interface{}
```

- *Type:* interface{}

---

##### `SortColumnsInput`<sup>Optional</sup> <a name="SortColumnsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.sortColumnsInput"></a>

```go
func SortColumnsInput() interface{}
```

- *Type:* interface{}

---

##### `StoredAsSubDirectoriesInput`<sup>Optional</sup> <a name="StoredAsSubDirectoriesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput"></a>

```go
func StoredAsSubDirectoriesInput() interface{}
```

- *Type:* interface{}

---

##### `BucketColumns`<sup>Required</sup> <a name="BucketColumns" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.bucketColumns"></a>

```go
func BucketColumns() *[]*string
```

- *Type:* *[]*string

---

##### `Compressed`<sup>Required</sup> <a name="Compressed" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.compressed"></a>

```go
func Compressed() interface{}
```

- *Type:* interface{}

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.inputFormat"></a>

```go
func InputFormat() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `NumberOfBuckets`<sup>Required</sup> <a name="NumberOfBuckets" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```go
func NumberOfBuckets() *f64
```

- *Type:* *f64

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.outputFormat"></a>

```go
func OutputFormat() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `StoredAsSubDirectories`<sup>Required</sup> <a name="StoredAsSubDirectories" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```go
func StoredAsSubDirectories() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

gluepartition.NewGluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId">PutSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId">ResetSchemaVersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionNumber">ResetSchemaVersionNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchemaId` <a name="PutSchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId"></a>

```go
func PutSchemaId(value GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaId"></a>

```go
func ResetSchemaId()
```

##### `ResetSchemaVersionId` <a name="ResetSchemaVersionId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId"></a>

```go
func ResetSchemaVersionId()
```

##### `ResetSchemaVersionNumber` <a name="ResetSchemaVersionNumber" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionNumber"></a>

```go
func ResetSchemaVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId">SchemaId</a></code> | <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput">SchemaVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput">SchemaVersionNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">SchemaVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">SchemaVersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```go
func SchemaId() GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference">GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference</a>

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput"></a>

```go
func SchemaIdInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaVersionIdInput`<sup>Optional</sup> <a name="SchemaVersionIdInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput"></a>

```go
func SchemaVersionIdInput() *string
```

- *Type:* *string

---

##### `SchemaVersionNumberInput`<sup>Optional</sup> <a name="SchemaVersionNumberInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput"></a>

```go
func SchemaVersionNumberInput() *f64
```

- *Type:* *f64

---

##### `SchemaVersionId`<sup>Required</sup> <a name="SchemaVersionId" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```go
func SchemaVersionId() *string
```

- *Type:* *string

---

##### `SchemaVersionNumber`<sup>Required</sup> <a name="SchemaVersionNumber" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```go
func SchemaVersionNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

gluepartition.NewGluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName">ResetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn">ResetSchemaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegistryName` <a name="ResetRegistryName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName"></a>

```go
func ResetRegistryName()
```

##### `ResetSchemaArn` <a name="ResetSchemaArn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn"></a>

```go
func ResetSchemaArn()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput">RegistryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput">SchemaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">RegistryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">SchemaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegistryNameInput`<sup>Optional</sup> <a name="RegistryNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput"></a>

```go
func RegistryNameInput() *string
```

- *Type:* *string

---

##### `SchemaArnInput`<sup>Optional</sup> <a name="SchemaArnInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput"></a>

```go
func SchemaArnInput() *string
```

- *Type:* *string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```go
func RegistryName() *string
```

- *Type:* *string

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```go
func SchemaArn() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

gluepartition.NewGluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetSerializationLibrary">ResetSerializationLibrary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetSerializationLibrary` <a name="ResetSerializationLibrary" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.resetSerializationLibrary"></a>

```go
func ResetSerializationLibrary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput">SerializationLibraryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary">SerializationLibrary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `SerializationLibraryInput`<sup>Optional</sup> <a name="SerializationLibraryInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibraryInput"></a>

```go
func SerializationLibraryInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `SerializationLibrary`<sup>Required</sup> <a name="SerializationLibrary" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.serializationLibrary"></a>

```go
func SerializationLibrary() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSerdeInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

gluepartition.NewGluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames">ResetSkewedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps">ResetSkewedColumnValueLocationMaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues">ResetSkewedColumnValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSkewedColumnNames` <a name="ResetSkewedColumnNames" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames"></a>

```go
func ResetSkewedColumnNames()
```

##### `ResetSkewedColumnValueLocationMaps` <a name="ResetSkewedColumnValueLocationMaps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps"></a>

```go
func ResetSkewedColumnValueLocationMaps()
```

##### `ResetSkewedColumnValues` <a name="ResetSkewedColumnValues" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues"></a>

```go
func ResetSkewedColumnValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput">SkewedColumnNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput">SkewedColumnValueLocationMapsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput">SkewedColumnValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">SkewedColumnNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">SkewedColumnValueLocationMaps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">SkewedColumnValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SkewedColumnNamesInput`<sup>Optional</sup> <a name="SkewedColumnNamesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput"></a>

```go
func SkewedColumnNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SkewedColumnValueLocationMapsInput`<sup>Optional</sup> <a name="SkewedColumnValueLocationMapsInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput"></a>

```go
func SkewedColumnValueLocationMapsInput() *string
```

- *Type:* *string

---

##### `SkewedColumnValuesInput`<sup>Optional</sup> <a name="SkewedColumnValuesInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput"></a>

```go
func SkewedColumnValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SkewedColumnNames`<sup>Required</sup> <a name="SkewedColumnNames" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```go
func SkewedColumnNames() *[]*string
```

- *Type:* *[]*string

---

##### `SkewedColumnValueLocationMaps`<sup>Required</sup> <a name="SkewedColumnValueLocationMaps" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```go
func SkewedColumnValueLocationMaps() *string
```

- *Type:* *string

---

##### `SkewedColumnValues`<sup>Required</sup> <a name="SkewedColumnValues" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```go
func SkewedColumnValues() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GluePartitionPartitionInputStorageDescriptorSortColumnsList <a name="GluePartitionPartitionInputStorageDescriptorSortColumnsList" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

gluepartition.NewGluePartitionPartitionInputStorageDescriptorSortColumnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GluePartitionPartitionInputStorageDescriptorSortColumnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.get"></a>

```go
func Get(index *f64) GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference <a name="GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluepartition"

gluepartition.NewGluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetColumn">ResetColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetSortOrder">ResetSortOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumn` <a name="ResetColumn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetColumn"></a>

```go
func ResetColumn()
```

##### `ResetSortOrder` <a name="ResetSortOrder" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.resetSortOrder"></a>

```go
func ResetSortOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.columnInput">ColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrderInput">SortOrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.column">Column</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrder">SortOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.columnInput"></a>

```go
func ColumnInput() *string
```

- *Type:* *string

---

##### `SortOrderInput`<sup>Optional</sup> <a name="SortOrderInput" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrderInput"></a>

```go
func SortOrderInput() *f64
```

- *Type:* *f64

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.column"></a>

```go
func Column() *string
```

- *Type:* *string

---

##### `SortOrder`<sup>Required</sup> <a name="SortOrder" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```go
func SortOrder() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gluePartition.GluePartitionPartitionInputStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



