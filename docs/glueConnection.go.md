# `glueConnection` Submodule <a name="`glueConnection` Submodule" id="@cdktn/provider-awscc.glueConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueConnection <a name="GlueConnection" id="@cdktn/provider-awscc.glueConnection.GlueConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection awscc_glue_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

glueconnection.NewGlueConnection(scope Construct, id *string, config GlueConnectionConfig) GlueConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig">GlueConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueConnection.GlueConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig">GlueConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput">PutConnectionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueConnection.GlueConnection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueConnection.GlueConnection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueConnection.GlueConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueConnection.GlueConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueConnection.GlueConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueConnection.GlueConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueConnection.GlueConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueConnection.GlueConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueConnection.GlueConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueConnection.GlueConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueConnection.GlueConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueConnection.GlueConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueConnection.GlueConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionInput` <a name="PutConnectionInput" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput"></a>

```go
func PutConnectionInput(value GlueConnectionConnectionInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueConnection.GlueConnection.putConnectionInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a>

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.glueConnection.GlueConnection.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

glueconnection.GlueConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

glueconnection.GlueConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

glueconnection.GlueConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueConnection.GlueConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

glueconnection.GlueConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GlueConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GlueConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GlueConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueConnection.GlueConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GlueConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.connectionInput">ConnectionInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference">GlueConnectionConnectionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.connectionInputInput">ConnectionInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.tagsInput">TagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.tags">Tags</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionInput`<sup>Required</sup> <a name="ConnectionInput" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.connectionInput"></a>

```go
func ConnectionInput() GlueConnectionConnectionInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference">GlueConnectionConnectionInputOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `ConnectionInputInput`<sup>Optional</sup> <a name="ConnectionInputInput" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.connectionInputInput"></a>

```go
func ConnectionInputInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.tagsInput"></a>

```go
func TagsInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.tags"></a>

```go
func Tags() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueConnection.GlueConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueConnectionConfig <a name="GlueConnectionConfig" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

&glueconnection.GlueConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CatalogId: *string,
	ConnectionInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueConnection.GlueConnectionConnectionInput,
	Tags: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.catalogId">CatalogId</a></code> | <code>*string</code> | The ID of the data catalog to create the catalog object in. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.connectionInput">ConnectionInput</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a></code> | The connection properties used for this connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.tags">Tags</a></code> | <code>*string</code> | The collection of tags. Each tag element is associated with a given resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

The ID of the data catalog to create the catalog object in.

Currently, this should be the AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}

---

##### `ConnectionInput`<sup>Required</sup> <a name="ConnectionInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.connectionInput"></a>

```go
ConnectionInput GlueConnectionConnectionInput
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput">GlueConnectionConnectionInput</a>

The connection properties used for this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#connection_input GlueConnection#connection_input}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConfig.property.tags"></a>

```go
Tags *string
```

- *Type:* *string

The collection of tags. Each tag element is associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#tags GlueConnection#tags}

---

### GlueConnectionConnectionInput <a name="GlueConnectionConnectionInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

&glueconnection.GlueConnectionConnectionInput {
	ConnectionType: *string,
	AthenaProperties: *string,
	AuthenticationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration,
	ConnectionProperties: *string,
	Description: *string,
	MatchCriteria: *[]*string,
	Name: *string,
	PhysicalConnectionRequirements: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements,
	PythonProperties: *string,
	SparkProperties: *string,
	ValidateCredentials: interface{},
	ValidateForComputeEnvironments: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.connectionType">ConnectionType</a></code> | <code>*string</code> | The type of the connection that needs to be created. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.athenaProperties">AthenaProperties</a></code> | <code>*string</code> | Connection properties specific to the Athena compute environment. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a></code> | The authentication configuration used to connect to the connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.connectionProperties">ConnectionProperties</a></code> | <code>*string</code> | A map of key-value pairs used as parameters for this connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.description">Description</a></code> | <code>*string</code> | A description of the connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.matchCriteria">MatchCriteria</a></code> | <code>*[]*string</code> | A list of criteria that can be used in selecting this connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.name">Name</a></code> | <code>*string</code> | The name of the connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.physicalConnectionRequirements">PhysicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a></code> | The physical connection requirements. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.pythonProperties">PythonProperties</a></code> | <code>*string</code> | Connection properties specific to the Python compute environment. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.sparkProperties">SparkProperties</a></code> | <code>*string</code> | Connection properties specific to the Spark compute environment. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.validateCredentials">ValidateCredentials</a></code> | <code>interface{}</code> | A flag to validate the credentials during create connection. Default is true. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.validateForComputeEnvironments">ValidateForComputeEnvironments</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#validate_for_compute_environments GlueConnection#validate_for_compute_environments}. |

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.connectionType"></a>

```go
ConnectionType *string
```

- *Type:* *string

The type of the connection that needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}

---

##### `AthenaProperties`<sup>Optional</sup> <a name="AthenaProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.athenaProperties"></a>

```go
AthenaProperties *string
```

- *Type:* *string

Connection properties specific to the Athena compute environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}

---

##### `AuthenticationConfiguration`<sup>Optional</sup> <a name="AuthenticationConfiguration" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.authenticationConfiguration"></a>

```go
AuthenticationConfiguration GlueConnectionConnectionInputAuthenticationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a>

The authentication configuration used to connect to the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authentication_configuration GlueConnection#authentication_configuration}

---

##### `ConnectionProperties`<sup>Optional</sup> <a name="ConnectionProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.connectionProperties"></a>

```go
ConnectionProperties *string
```

- *Type:* *string

A map of key-value pairs used as parameters for this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#description GlueConnection#description}

---

##### `MatchCriteria`<sup>Optional</sup> <a name="MatchCriteria" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.matchCriteria"></a>

```go
MatchCriteria *[]*string
```

- *Type:* *[]*string

A list of criteria that can be used in selecting this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#name GlueConnection#name}

---

##### `PhysicalConnectionRequirements`<sup>Optional</sup> <a name="PhysicalConnectionRequirements" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.physicalConnectionRequirements"></a>

```go
PhysicalConnectionRequirements GlueConnectionConnectionInputPhysicalConnectionRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a>

The physical connection requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#physical_connection_requirements GlueConnection#physical_connection_requirements}

---

##### `PythonProperties`<sup>Optional</sup> <a name="PythonProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.pythonProperties"></a>

```go
PythonProperties *string
```

- *Type:* *string

Connection properties specific to the Python compute environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#python_properties GlueConnection#python_properties}

---

##### `SparkProperties`<sup>Optional</sup> <a name="SparkProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.sparkProperties"></a>

```go
SparkProperties *string
```

- *Type:* *string

Connection properties specific to the Spark compute environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#spark_properties GlueConnection#spark_properties}

---

##### `ValidateCredentials`<sup>Optional</sup> <a name="ValidateCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.validateCredentials"></a>

```go
ValidateCredentials interface{}
```

- *Type:* interface{}

A flag to validate the credentials during create connection. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#validate_credentials GlueConnection#validate_credentials}

---

##### `ValidateForComputeEnvironments`<sup>Optional</sup> <a name="ValidateForComputeEnvironments" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInput.property.validateForComputeEnvironments"></a>

```go
ValidateForComputeEnvironments *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#validate_for_compute_environments GlueConnection#validate_for_compute_environments}.

---

### GlueConnectionConnectionInputAuthenticationConfiguration <a name="GlueConnectionConnectionInputAuthenticationConfiguration" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

&glueconnection.GlueConnectionConnectionInputAuthenticationConfiguration {
	AuthenticationType: *string,
	BasicAuthenticationCredentials: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials,
	CustomAuthenticationCredentials: *string,
	KmsKeyArn: *string,
	OAuth2Properties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties,
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | A structure containing the authentication configuration in the CreateConnection request. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.basicAuthenticationCredentials">BasicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | For supplying basic auth credentials when not providing a SecretArn value. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.customAuthenticationCredentials">CustomAuthenticationCredentials</a></code> | <code>*string</code> | A structure containing the authentication credentials in the CreateConnection request. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the KMS key used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.oAuth2Properties">OAuth2Properties</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | A structure containing properties for OAuth2 in the CreateConnection request. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.secretArn">SecretArn</a></code> | <code>*string</code> | The secret manager ARN to store credentials in the CreateConnection request. |

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.authenticationType"></a>

```go
AuthenticationType *string
```

- *Type:* *string

A structure containing the authentication configuration in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authentication_type GlueConnection#authentication_type}

---

##### `BasicAuthenticationCredentials`<sup>Optional</sup> <a name="BasicAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.basicAuthenticationCredentials"></a>

```go
BasicAuthenticationCredentials GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

For supplying basic auth credentials when not providing a SecretArn value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#basic_authentication_credentials GlueConnection#basic_authentication_credentials}

---

##### `CustomAuthenticationCredentials`<sup>Optional</sup> <a name="CustomAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.customAuthenticationCredentials"></a>

```go
CustomAuthenticationCredentials *string
```

- *Type:* *string

A structure containing the authentication credentials in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#custom_authentication_credentials GlueConnection#custom_authentication_credentials}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the KMS key used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#kms_key_arn GlueConnection#kms_key_arn}

---

##### `OAuth2Properties`<sup>Optional</sup> <a name="OAuth2Properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.oAuth2Properties"></a>

```go
OAuth2Properties GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a>

A structure containing properties for OAuth2 in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_properties GlueConnection#o_auth_2_properties}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The secret manager ARN to store credentials in the CreateConnection request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#secret_arn GlueConnection#secret_arn}

---

### GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials <a name="GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

&glueconnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.password">Password</a></code> | <code>*string</code> | The password used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.username">Username</a></code> | <code>*string</code> | The username used in the authentication configuration. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#password GlueConnection#password}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#username GlueConnection#username}

---

### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

&glueconnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties {
	AuthorizationCodeProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties,
	OAuth2ClientApplication: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication,
	OAuth2Credentials: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials,
	OAuth2GrantType: *string,
	TokenUrl: *string,
	TokenUrlParametersMap: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.authorizationCodeProperties">AuthorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | The set of properties required for the the OAuth2 AUTHORIZATION_CODE grant type workflow. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2ClientApplication">OAuth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | The OAuth2 client app used for the connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2Credentials">OAuth2Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | A structure containing the OAuth2 credentials used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2GrantType">OAuth2GrantType</a></code> | <code>*string</code> | The grant type used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | The URL used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrlParametersMap">TokenUrlParametersMap</a></code> | <code>*string</code> | A map of key-value pairs used in the authentication configuration. |

---

##### `AuthorizationCodeProperties`<sup>Optional</sup> <a name="AuthorizationCodeProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.authorizationCodeProperties"></a>

```go
AuthorizationCodeProperties GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

The set of properties required for the the OAuth2 AUTHORIZATION_CODE grant type workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authorization_code_properties GlueConnection#authorization_code_properties}

---

##### `OAuth2ClientApplication`<sup>Optional</sup> <a name="OAuth2ClientApplication" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2ClientApplication"></a>

```go
OAuth2ClientApplication GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

The OAuth2 client app used for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_client_application GlueConnection#o_auth_2_client_application}

---

##### `OAuth2Credentials`<sup>Optional</sup> <a name="OAuth2Credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2Credentials"></a>

```go
OAuth2Credentials GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

A structure containing the OAuth2 credentials used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_credentials GlueConnection#o_auth_2_credentials}

---

##### `OAuth2GrantType`<sup>Optional</sup> <a name="OAuth2GrantType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2GrantType"></a>

```go
OAuth2GrantType *string
```

- *Type:* *string

The grant type used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#o_auth_2_grant_type GlueConnection#o_auth_2_grant_type}

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrl"></a>

```go
TokenUrl *string
```

- *Type:* *string

The URL used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#token_url GlueConnection#token_url}

---

##### `TokenUrlParametersMap`<sup>Optional</sup> <a name="TokenUrlParametersMap" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrlParametersMap"></a>

```go
TokenUrlParametersMap *string
```

- *Type:* *string

A map of key-value pairs used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#token_url_parameters_map GlueConnection#token_url_parameters_map}

---

### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

&glueconnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties {
	AuthorizationCode: *string,
	RedirectUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.authorizationCode">AuthorizationCode</a></code> | <code>*string</code> | The authorization code used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.redirectUri">RedirectUri</a></code> | <code>*string</code> | The redirect URI where the user gets redirected to by authorization server when issuing an authorization code. |

---

##### `AuthorizationCode`<sup>Optional</sup> <a name="AuthorizationCode" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.authorizationCode"></a>

```go
AuthorizationCode *string
```

- *Type:* *string

The authorization code used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#authorization_code GlueConnection#authorization_code}

---

##### `RedirectUri`<sup>Optional</sup> <a name="RedirectUri" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.redirectUri"></a>

```go
RedirectUri *string
```

- *Type:* *string

The redirect URI where the user gets redirected to by authorization server when issuing an authorization code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#redirect_uri GlueConnection#redirect_uri}

---

### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

&glueconnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication {
	AwsManagedClientApplicationReference: *string,
	UserManagedClientApplicationClientId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.awsManagedClientApplicationReference">AwsManagedClientApplicationReference</a></code> | <code>*string</code> | The reference to the SaaS-side client app that is AWS managed. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.userManagedClientApplicationClientId">UserManagedClientApplicationClientId</a></code> | <code>*string</code> | The client application clientID if the ClientAppType is USER_MANAGED. |

---

##### `AwsManagedClientApplicationReference`<sup>Optional</sup> <a name="AwsManagedClientApplicationReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.awsManagedClientApplicationReference"></a>

```go
AwsManagedClientApplicationReference *string
```

- *Type:* *string

The reference to the SaaS-side client app that is AWS managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#aws_managed_client_application_reference GlueConnection#aws_managed_client_application_reference}

---

##### `UserManagedClientApplicationClientId`<sup>Optional</sup> <a name="UserManagedClientApplicationClientId" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.userManagedClientApplicationClientId"></a>

```go
UserManagedClientApplicationClientId *string
```

- *Type:* *string

The client application clientID if the ClientAppType is USER_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#user_managed_client_application_client_id GlueConnection#user_managed_client_application_client_id}

---

### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

&glueconnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials {
	AccessToken: *string,
	JwtToken: *string,
	RefreshToken: *string,
	UserManagedClientApplicationClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.accessToken">AccessToken</a></code> | <code>*string</code> | The access token used in the authentication configuration. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.jwtToken">JwtToken</a></code> | <code>*string</code> | The JSON Web Token (JWT) used when the authentication type is OAuth2. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.refreshToken">RefreshToken</a></code> | <code>*string</code> | The refresh token used when the authentication type is OAuth2. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.userManagedClientApplicationClientSecret">UserManagedClientApplicationClientSecret</a></code> | <code>*string</code> | The client application client secret if the client application is user managed. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.accessToken"></a>

```go
AccessToken *string
```

- *Type:* *string

The access token used in the authentication configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#access_token GlueConnection#access_token}

---

##### `JwtToken`<sup>Optional</sup> <a name="JwtToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.jwtToken"></a>

```go
JwtToken *string
```

- *Type:* *string

The JSON Web Token (JWT) used when the authentication type is OAuth2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#jwt_token GlueConnection#jwt_token}

---

##### `RefreshToken`<sup>Optional</sup> <a name="RefreshToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.refreshToken"></a>

```go
RefreshToken *string
```

- *Type:* *string

The refresh token used when the authentication type is OAuth2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#refresh_token GlueConnection#refresh_token}

---

##### `UserManagedClientApplicationClientSecret`<sup>Optional</sup> <a name="UserManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.userManagedClientApplicationClientSecret"></a>

```go
UserManagedClientApplicationClientSecret *string
```

- *Type:* *string

The client application client secret if the client application is user managed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#user_managed_client_application_client_secret GlueConnection#user_managed_client_application_client_secret}

---

### GlueConnectionConnectionInputPhysicalConnectionRequirements <a name="GlueConnectionConnectionInputPhysicalConnectionRequirements" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

&glueconnection.GlueConnectionConnectionInputPhysicalConnectionRequirements {
	AvailabilityZone: *string,
	SecurityGroupIdList: *[]*string,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | The availability zone where the connection is located. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>*[]*string</code> | The security group ID list used by the connection. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.subnetId">SubnetId</a></code> | <code>*string</code> | The subnet ID used by the connection. |

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

The availability zone where the connection is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}

---

##### `SecurityGroupIdList`<sup>Optional</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.securityGroupIdList"></a>

```go
SecurityGroupIdList *[]*string
```

- *Type:* *[]*string

The security group ID list used by the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

The subnet ID used by the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

glueconnection.NewGlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

glueconnection.NewGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetAuthorizationCode">ResetAuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetRedirectUri">ResetRedirectUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationCode` <a name="ResetAuthorizationCode" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetAuthorizationCode"></a>

```go
func ResetAuthorizationCode()
```

##### `ResetRedirectUri` <a name="ResetRedirectUri" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetRedirectUri"></a>

```go
func ResetRedirectUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput">AuthorizationCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput">RedirectUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">AuthorizationCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">RedirectUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationCodeInput`<sup>Optional</sup> <a name="AuthorizationCodeInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput"></a>

```go
func AuthorizationCodeInput() *string
```

- *Type:* *string

---

##### `RedirectUriInput`<sup>Optional</sup> <a name="RedirectUriInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput"></a>

```go
func RedirectUriInput() *string
```

- *Type:* *string

---

##### `AuthorizationCode`<sup>Required</sup> <a name="AuthorizationCode" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```go
func AuthorizationCode() *string
```

- *Type:* *string

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```go
func RedirectUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

glueconnection.NewGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference">ResetAwsManagedClientApplicationReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId">ResetUserManagedClientApplicationClientId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsManagedClientApplicationReference` <a name="ResetAwsManagedClientApplicationReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference"></a>

```go
func ResetAwsManagedClientApplicationReference()
```

##### `ResetUserManagedClientApplicationClientId` <a name="ResetUserManagedClientApplicationClientId" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId"></a>

```go
func ResetUserManagedClientApplicationClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput">AwsManagedClientApplicationReferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput">UserManagedClientApplicationClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">AwsManagedClientApplicationReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">UserManagedClientApplicationClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsManagedClientApplicationReferenceInput`<sup>Optional</sup> <a name="AwsManagedClientApplicationReferenceInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput"></a>

```go
func AwsManagedClientApplicationReferenceInput() *string
```

- *Type:* *string

---

##### `UserManagedClientApplicationClientIdInput`<sup>Optional</sup> <a name="UserManagedClientApplicationClientIdInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput"></a>

```go
func UserManagedClientApplicationClientIdInput() *string
```

- *Type:* *string

---

##### `AwsManagedClientApplicationReference`<sup>Required</sup> <a name="AwsManagedClientApplicationReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```go
func AwsManagedClientApplicationReference() *string
```

- *Type:* *string

---

##### `UserManagedClientApplicationClientId`<sup>Required</sup> <a name="UserManagedClientApplicationClientId" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```go
func UserManagedClientApplicationClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

glueconnection.NewGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetJwtToken">ResetJwtToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetRefreshToken">ResetRefreshToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret">ResetUserManagedClientApplicationClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetJwtToken` <a name="ResetJwtToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetJwtToken"></a>

```go
func ResetJwtToken()
```

##### `ResetRefreshToken` <a name="ResetRefreshToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetRefreshToken"></a>

```go
func ResetRefreshToken()
```

##### `ResetUserManagedClientApplicationClientSecret` <a name="ResetUserManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret"></a>

```go
func ResetUserManagedClientApplicationClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtTokenInput">JwtTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshTokenInput">RefreshTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput">UserManagedClientApplicationClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken">JwtToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">UserManagedClientApplicationClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessTokenInput"></a>

```go
func AccessTokenInput() *string
```

- *Type:* *string

---

##### `JwtTokenInput`<sup>Optional</sup> <a name="JwtTokenInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtTokenInput"></a>

```go
func JwtTokenInput() *string
```

- *Type:* *string

---

##### `RefreshTokenInput`<sup>Optional</sup> <a name="RefreshTokenInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshTokenInput"></a>

```go
func RefreshTokenInput() *string
```

- *Type:* *string

---

##### `UserManagedClientApplicationClientSecretInput`<sup>Optional</sup> <a name="UserManagedClientApplicationClientSecretInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput"></a>

```go
func UserManagedClientApplicationClientSecretInput() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `JwtToken`<sup>Required</sup> <a name="JwtToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken"></a>

```go
func JwtToken() *string
```

- *Type:* *string

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken"></a>

```go
func RefreshToken() *string
```

- *Type:* *string

---

##### `UserManagedClientApplicationClientSecret`<sup>Required</sup> <a name="UserManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```go
func UserManagedClientApplicationClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

glueconnection.NewGlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties">PutAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication">PutOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials">PutOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetAuthorizationCodeProperties">ResetAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2ClientApplication">ResetOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2Credentials">ResetOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2GrantType">ResetOAuth2GrantType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrl">ResetTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrlParametersMap">ResetTokenUrlParametersMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationCodeProperties` <a name="PutAuthorizationCodeProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties"></a>

```go
func PutAuthorizationCodeProperties(value GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---

##### `PutOAuth2ClientApplication` <a name="PutOAuth2ClientApplication" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication"></a>

```go
func PutOAuth2ClientApplication(value GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---

##### `PutOAuth2Credentials` <a name="PutOAuth2Credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials"></a>

```go
func PutOAuth2Credentials(value GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---

##### `ResetAuthorizationCodeProperties` <a name="ResetAuthorizationCodeProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetAuthorizationCodeProperties"></a>

```go
func ResetAuthorizationCodeProperties()
```

##### `ResetOAuth2ClientApplication` <a name="ResetOAuth2ClientApplication" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2ClientApplication"></a>

```go
func ResetOAuth2ClientApplication()
```

##### `ResetOAuth2Credentials` <a name="ResetOAuth2Credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2Credentials"></a>

```go
func ResetOAuth2Credentials()
```

##### `ResetOAuth2GrantType` <a name="ResetOAuth2GrantType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2GrantType"></a>

```go
func ResetOAuth2GrantType()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrl"></a>

```go
func ResetTokenUrl()
```

##### `ResetTokenUrlParametersMap` <a name="ResetTokenUrlParametersMap" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrlParametersMap"></a>

```go
func ResetTokenUrlParametersMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties">AuthorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication">OAuth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials">OAuth2Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodePropertiesInput">AuthorizationCodePropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplicationInput">OAuth2ClientApplicationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2CredentialsInput">OAuth2CredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantTypeInput">OAuth2GrantTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMapInput">TokenUrlParametersMapInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType">OAuth2GrantType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap">TokenUrlParametersMap</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationCodeProperties`<sup>Required</sup> <a name="AuthorizationCodeProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```go
func AuthorizationCodeProperties() GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a>

---

##### `OAuth2ClientApplication`<sup>Required</sup> <a name="OAuth2ClientApplication" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication"></a>

```go
func OAuth2ClientApplication() GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a>

---

##### `OAuth2Credentials`<sup>Required</sup> <a name="OAuth2Credentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials"></a>

```go
func OAuth2Credentials() GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a>

---

##### `AuthorizationCodePropertiesInput`<sup>Optional</sup> <a name="AuthorizationCodePropertiesInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodePropertiesInput"></a>

```go
func AuthorizationCodePropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `OAuth2ClientApplicationInput`<sup>Optional</sup> <a name="OAuth2ClientApplicationInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplicationInput"></a>

```go
func OAuth2ClientApplicationInput() interface{}
```

- *Type:* interface{}

---

##### `OAuth2CredentialsInput`<sup>Optional</sup> <a name="OAuth2CredentialsInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2CredentialsInput"></a>

```go
func OAuth2CredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `OAuth2GrantTypeInput`<sup>Optional</sup> <a name="OAuth2GrantTypeInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantTypeInput"></a>

```go
func OAuth2GrantTypeInput() *string
```

- *Type:* *string

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlInput"></a>

```go
func TokenUrlInput() *string
```

- *Type:* *string

---

##### `TokenUrlParametersMapInput`<sup>Optional</sup> <a name="TokenUrlParametersMapInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMapInput"></a>

```go
func TokenUrlParametersMapInput() *string
```

- *Type:* *string

---

##### `OAuth2GrantType`<sup>Required</sup> <a name="OAuth2GrantType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType"></a>

```go
func OAuth2GrantType() *string
```

- *Type:* *string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl"></a>

```go
func TokenUrl() *string
```

- *Type:* *string

---

##### `TokenUrlParametersMap`<sup>Required</sup> <a name="TokenUrlParametersMap" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```go
func TokenUrlParametersMap() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueConnectionConnectionInputAuthenticationConfigurationOutputReference <a name="GlueConnectionConnectionInputAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

glueconnection.NewGlueConnectionConnectionInputAuthenticationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueConnectionConnectionInputAuthenticationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials">PutBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties">PutOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials">ResetBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials">ResetCustomAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetOAuth2Properties">ResetOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuthenticationCredentials` <a name="PutBasicAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials"></a>

```go
func PutBasicAuthenticationCredentials(value GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `PutOAuth2Properties` <a name="PutOAuth2Properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties"></a>

```go
func PutOAuth2Properties(value GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetAuthenticationType"></a>

```go
func ResetAuthenticationType()
```

##### `ResetBasicAuthenticationCredentials` <a name="ResetBasicAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials"></a>

```go
func ResetBasicAuthenticationCredentials()
```

##### `ResetCustomAuthenticationCredentials` <a name="ResetCustomAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials"></a>

```go
func ResetCustomAuthenticationCredentials()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetOAuth2Properties` <a name="ResetOAuth2Properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetOAuth2Properties"></a>

```go
func ResetOAuth2Properties()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">BasicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties">OAuth2Properties</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput">BasicAuthenticationCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput">CustomAuthenticationCredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2PropertiesInput">OAuth2PropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">CustomAuthenticationCredentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BasicAuthenticationCredentials`<sup>Required</sup> <a name="BasicAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```go
func BasicAuthenticationCredentials() GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a>

---

##### `OAuth2Properties`<sup>Required</sup> <a name="OAuth2Properties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties"></a>

```go
func OAuth2Properties() GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a>

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.authenticationTypeInput"></a>

```go
func AuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `BasicAuthenticationCredentialsInput`<sup>Optional</sup> <a name="BasicAuthenticationCredentialsInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput"></a>

```go
func BasicAuthenticationCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `CustomAuthenticationCredentialsInput`<sup>Optional</sup> <a name="CustomAuthenticationCredentialsInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput"></a>

```go
func CustomAuthenticationCredentialsInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `OAuth2PropertiesInput`<sup>Optional</sup> <a name="OAuth2PropertiesInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2PropertiesInput"></a>

```go
func OAuth2PropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `CustomAuthenticationCredentials`<sup>Required</sup> <a name="CustomAuthenticationCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```go
func CustomAuthenticationCredentials() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueConnectionConnectionInputOutputReference <a name="GlueConnectionConnectionInputOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

glueconnection.NewGlueConnectionConnectionInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueConnectionConnectionInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putAuthenticationConfiguration">PutAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putPhysicalConnectionRequirements">PutPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetAthenaProperties">ResetAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetAuthenticationConfiguration">ResetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetConnectionProperties">ResetConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetMatchCriteria">ResetMatchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetPhysicalConnectionRequirements">ResetPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetPythonProperties">ResetPythonProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetSparkProperties">ResetSparkProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetValidateCredentials">ResetValidateCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetValidateForComputeEnvironments">ResetValidateForComputeEnvironments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticationConfiguration` <a name="PutAuthenticationConfiguration" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putAuthenticationConfiguration"></a>

```go
func PutAuthenticationConfiguration(value GlueConnectionConnectionInputAuthenticationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfiguration">GlueConnectionConnectionInputAuthenticationConfiguration</a>

---

##### `PutPhysicalConnectionRequirements` <a name="PutPhysicalConnectionRequirements" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putPhysicalConnectionRequirements"></a>

```go
func PutPhysicalConnectionRequirements(value GlueConnectionConnectionInputPhysicalConnectionRequirements)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.putPhysicalConnectionRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirements">GlueConnectionConnectionInputPhysicalConnectionRequirements</a>

---

##### `ResetAthenaProperties` <a name="ResetAthenaProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetAthenaProperties"></a>

```go
func ResetAthenaProperties()
```

##### `ResetAuthenticationConfiguration` <a name="ResetAuthenticationConfiguration" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetAuthenticationConfiguration"></a>

```go
func ResetAuthenticationConfiguration()
```

##### `ResetConnectionProperties` <a name="ResetConnectionProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetConnectionProperties"></a>

```go
func ResetConnectionProperties()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetMatchCriteria` <a name="ResetMatchCriteria" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetMatchCriteria"></a>

```go
func ResetMatchCriteria()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPhysicalConnectionRequirements` <a name="ResetPhysicalConnectionRequirements" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetPhysicalConnectionRequirements"></a>

```go
func ResetPhysicalConnectionRequirements()
```

##### `ResetPythonProperties` <a name="ResetPythonProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetPythonProperties"></a>

```go
func ResetPythonProperties()
```

##### `ResetSparkProperties` <a name="ResetSparkProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetSparkProperties"></a>

```go
func ResetSparkProperties()
```

##### `ResetValidateCredentials` <a name="ResetValidateCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetValidateCredentials"></a>

```go
func ResetValidateCredentials()
```

##### `ResetValidateForComputeEnvironments` <a name="ResetValidateForComputeEnvironments" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.resetValidateForComputeEnvironments"></a>

```go
func ResetValidateForComputeEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.physicalConnectionRequirements">PhysicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference">GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.athenaPropertiesInput">AthenaPropertiesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.authenticationConfigurationInput">AuthenticationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionPropertiesInput">ConnectionPropertiesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.matchCriteriaInput">MatchCriteriaInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.physicalConnectionRequirementsInput">PhysicalConnectionRequirementsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.pythonPropertiesInput">PythonPropertiesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.sparkPropertiesInput">SparkPropertiesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateCredentialsInput">ValidateCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateForComputeEnvironmentsInput">ValidateForComputeEnvironmentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.athenaProperties">AthenaProperties</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionProperties">ConnectionProperties</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.matchCriteria">MatchCriteria</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.pythonProperties">PythonProperties</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.sparkProperties">SparkProperties</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateCredentials">ValidateCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateForComputeEnvironments">ValidateForComputeEnvironments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationConfiguration`<sup>Required</sup> <a name="AuthenticationConfiguration" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.authenticationConfiguration"></a>

```go
func AuthenticationConfiguration() GlueConnectionConnectionInputAuthenticationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputAuthenticationConfigurationOutputReference">GlueConnectionConnectionInputAuthenticationConfigurationOutputReference</a>

---

##### `PhysicalConnectionRequirements`<sup>Required</sup> <a name="PhysicalConnectionRequirements" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.physicalConnectionRequirements"></a>

```go
func PhysicalConnectionRequirements() GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference">GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference</a>

---

##### `AthenaPropertiesInput`<sup>Optional</sup> <a name="AthenaPropertiesInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.athenaPropertiesInput"></a>

```go
func AthenaPropertiesInput() *string
```

- *Type:* *string

---

##### `AuthenticationConfigurationInput`<sup>Optional</sup> <a name="AuthenticationConfigurationInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.authenticationConfigurationInput"></a>

```go
func AuthenticationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionPropertiesInput`<sup>Optional</sup> <a name="ConnectionPropertiesInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionPropertiesInput"></a>

```go
func ConnectionPropertiesInput() *string
```

- *Type:* *string

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionTypeInput"></a>

```go
func ConnectionTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `MatchCriteriaInput`<sup>Optional</sup> <a name="MatchCriteriaInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.matchCriteriaInput"></a>

```go
func MatchCriteriaInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PhysicalConnectionRequirementsInput`<sup>Optional</sup> <a name="PhysicalConnectionRequirementsInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.physicalConnectionRequirementsInput"></a>

```go
func PhysicalConnectionRequirementsInput() interface{}
```

- *Type:* interface{}

---

##### `PythonPropertiesInput`<sup>Optional</sup> <a name="PythonPropertiesInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.pythonPropertiesInput"></a>

```go
func PythonPropertiesInput() *string
```

- *Type:* *string

---

##### `SparkPropertiesInput`<sup>Optional</sup> <a name="SparkPropertiesInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.sparkPropertiesInput"></a>

```go
func SparkPropertiesInput() *string
```

- *Type:* *string

---

##### `ValidateCredentialsInput`<sup>Optional</sup> <a name="ValidateCredentialsInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateCredentialsInput"></a>

```go
func ValidateCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `ValidateForComputeEnvironmentsInput`<sup>Optional</sup> <a name="ValidateForComputeEnvironmentsInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateForComputeEnvironmentsInput"></a>

```go
func ValidateForComputeEnvironmentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AthenaProperties`<sup>Required</sup> <a name="AthenaProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.athenaProperties"></a>

```go
func AthenaProperties() *string
```

- *Type:* *string

---

##### `ConnectionProperties`<sup>Required</sup> <a name="ConnectionProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionProperties"></a>

```go
func ConnectionProperties() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `MatchCriteria`<sup>Required</sup> <a name="MatchCriteria" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.matchCriteria"></a>

```go
func MatchCriteria() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PythonProperties`<sup>Required</sup> <a name="PythonProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.pythonProperties"></a>

```go
func PythonProperties() *string
```

- *Type:* *string

---

##### `SparkProperties`<sup>Required</sup> <a name="SparkProperties" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.sparkProperties"></a>

```go
func SparkProperties() *string
```

- *Type:* *string

---

##### `ValidateCredentials`<sup>Required</sup> <a name="ValidateCredentials" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateCredentials"></a>

```go
func ValidateCredentials() interface{}
```

- *Type:* interface{}

---

##### `ValidateForComputeEnvironments`<sup>Required</sup> <a name="ValidateForComputeEnvironments" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.validateForComputeEnvironments"></a>

```go
func ValidateForComputeEnvironments() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference <a name="GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueconnection"

glueconnection.NewGlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList">ResetSecurityGroupIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetSecurityGroupIdList` <a name="ResetSecurityGroupIdList" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList"></a>

```go
func ResetSecurityGroupIdList()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput">SecurityGroupIdListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdListInput`<sup>Optional</sup> <a name="SecurityGroupIdListInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput"></a>

```go
func SecurityGroupIdListInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `SecurityGroupIdList`<sup>Required</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```go
func SecurityGroupIdList() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueConnection.GlueConnectionConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



