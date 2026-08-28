# `connectInstance` Submodule <a name="`connectInstance` Submodule" id="@cdktn/provider-awscc.connectInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectInstance <a name="ConnectInstance" id="@cdktn/provider-awscc.connectInstance.ConnectInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance awscc_connect_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstance"

connectinstance.NewConnectInstance(scope Construct, id *string, config ConnectInstanceConfig) ConnectInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig">ConnectInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig">ConnectInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetInstanceAlias">ResetInstanceAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes"></a>

```go
func PutAttributes(value ConnectInstanceAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetDirectoryId"></a>

```go
func ResetDirectoryId()
```

##### `ResetInstanceAlias` <a name="ResetInstanceAlias" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetInstanceAlias"></a>

```go
func ResetInstanceAlias()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstance"

connectinstance.ConnectInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstance"

connectinstance.ConnectInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstance"

connectinstance.ConnectInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstance"

connectinstance.ConnectInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConnectInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConnectInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConnectInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConnectInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference">ConnectInstanceAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceStatus">InstanceStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList">ConnectInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributesInput">AttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryIdInput">DirectoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementTypeInput">IdentityManagementTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAliasInput">InstanceAliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementType">IdentityManagementType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAlias">InstanceAlias</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributes"></a>

```go
func Attributes() ConnectInstanceAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference">ConnectInstanceAttributesOutputReference</a>

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `InstanceStatus`<sup>Required</sup> <a name="InstanceStatus" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceStatus"></a>

```go
func InstanceStatus() *string
```

- *Type:* *string

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.serviceRole"></a>

```go
func ServiceRole() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tags"></a>

```go
func Tags() ConnectInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList">ConnectInstanceTagsList</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributesInput"></a>

```go
func AttributesInput() interface{}
```

- *Type:* interface{}

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryIdInput"></a>

```go
func DirectoryIdInput() *string
```

- *Type:* *string

---

##### `IdentityManagementTypeInput`<sup>Optional</sup> <a name="IdentityManagementTypeInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementTypeInput"></a>

```go
func IdentityManagementTypeInput() *string
```

- *Type:* *string

---

##### `InstanceAliasInput`<sup>Optional</sup> <a name="InstanceAliasInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAliasInput"></a>

```go
func InstanceAliasInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `IdentityManagementType`<sup>Required</sup> <a name="IdentityManagementType" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementType"></a>

```go
func IdentityManagementType() *string
```

- *Type:* *string

---

##### `InstanceAlias`<sup>Required</sup> <a name="InstanceAlias" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAlias"></a>

```go
func InstanceAlias() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectInstanceAttributes <a name="ConnectInstanceAttributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstance"

&connectinstance.ConnectInstanceAttributes {
	InboundCalls: interface{},
	OutboundCalls: interface{},
	AutoResolveBestVoices: interface{},
	ContactflowLogs: interface{},
	ContactLens: interface{},
	EarlyMedia: interface{},
	EnhancedChatMonitoring: interface{},
	EnhancedContactMonitoring: interface{},
	HighVolumeOutBound: interface{},
	MessageStreaming: interface{},
	MultiPartyChatConference: interface{},
	MultiPartyConference: interface{},
	UseCustomTtsVoices: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.inboundCalls">InboundCalls</a></code> | <code>interface{}</code> | Mandatory element which enables inbound calls on new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.outboundCalls">OutboundCalls</a></code> | <code>interface{}</code> | Mandatory element which enables outbound calls on new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.autoResolveBestVoices">AutoResolveBestVoices</a></code> | <code>interface{}</code> | Boolean flag which enables AUTO_RESOLVE_BEST_VOICES on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactflowLogs">ContactflowLogs</a></code> | <code>interface{}</code> | Boolean flag which enables CONTACTFLOW_LOGS on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactLens">ContactLens</a></code> | <code>interface{}</code> | Boolean flag which enables CONTACT_LENS on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.earlyMedia">EarlyMedia</a></code> | <code>interface{}</code> | Boolean flag which enables EARLY_MEDIA on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedChatMonitoring">EnhancedChatMonitoring</a></code> | <code>interface{}</code> | Boolean flag which enables ENHANCED_CHAT_MONITORING on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedContactMonitoring">EnhancedContactMonitoring</a></code> | <code>interface{}</code> | Boolean flag which enables ENHANCED_CONTACT_MONITORING on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.highVolumeOutBound">HighVolumeOutBound</a></code> | <code>interface{}</code> | Boolean flag which enables HIGH_VOLUME_OUTBOUND on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.messageStreaming">MessageStreaming</a></code> | <code>interface{}</code> | Boolean flag which enables MESSAGE_STREAMING on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyChatConference">MultiPartyChatConference</a></code> | <code>interface{}</code> | Boolean flag which enables MULTI_PARTY_CHAT_CONFERENCE on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyConference">MultiPartyConference</a></code> | <code>interface{}</code> | Boolean flag which enables MULTI_PARTY_CONFERENCE on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.useCustomTtsVoices">UseCustomTtsVoices</a></code> | <code>interface{}</code> | Boolean flag which enables USE_CUSTOM_TTS_VOICES on an instance. |

---

##### `InboundCalls`<sup>Required</sup> <a name="InboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.inboundCalls"></a>

```go
InboundCalls interface{}
```

- *Type:* interface{}

Mandatory element which enables inbound calls on new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#inbound_calls ConnectInstance#inbound_calls}

---

##### `OutboundCalls`<sup>Required</sup> <a name="OutboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.outboundCalls"></a>

```go
OutboundCalls interface{}
```

- *Type:* interface{}

Mandatory element which enables outbound calls on new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#outbound_calls ConnectInstance#outbound_calls}

---

##### `AutoResolveBestVoices`<sup>Optional</sup> <a name="AutoResolveBestVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.autoResolveBestVoices"></a>

```go
AutoResolveBestVoices interface{}
```

- *Type:* interface{}

Boolean flag which enables AUTO_RESOLVE_BEST_VOICES on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#auto_resolve_best_voices ConnectInstance#auto_resolve_best_voices}

---

##### `ContactflowLogs`<sup>Optional</sup> <a name="ContactflowLogs" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactflowLogs"></a>

```go
ContactflowLogs interface{}
```

- *Type:* interface{}

Boolean flag which enables CONTACTFLOW_LOGS on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#contactflow_logs ConnectInstance#contactflow_logs}

---

##### `ContactLens`<sup>Optional</sup> <a name="ContactLens" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactLens"></a>

```go
ContactLens interface{}
```

- *Type:* interface{}

Boolean flag which enables CONTACT_LENS on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#contact_lens ConnectInstance#contact_lens}

---

##### `EarlyMedia`<sup>Optional</sup> <a name="EarlyMedia" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.earlyMedia"></a>

```go
EarlyMedia interface{}
```

- *Type:* interface{}

Boolean flag which enables EARLY_MEDIA on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#early_media ConnectInstance#early_media}

---

##### `EnhancedChatMonitoring`<sup>Optional</sup> <a name="EnhancedChatMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedChatMonitoring"></a>

```go
EnhancedChatMonitoring interface{}
```

- *Type:* interface{}

Boolean flag which enables ENHANCED_CHAT_MONITORING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#enhanced_chat_monitoring ConnectInstance#enhanced_chat_monitoring}

---

##### `EnhancedContactMonitoring`<sup>Optional</sup> <a name="EnhancedContactMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedContactMonitoring"></a>

```go
EnhancedContactMonitoring interface{}
```

- *Type:* interface{}

Boolean flag which enables ENHANCED_CONTACT_MONITORING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#enhanced_contact_monitoring ConnectInstance#enhanced_contact_monitoring}

---

##### `HighVolumeOutBound`<sup>Optional</sup> <a name="HighVolumeOutBound" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.highVolumeOutBound"></a>

```go
HighVolumeOutBound interface{}
```

- *Type:* interface{}

Boolean flag which enables HIGH_VOLUME_OUTBOUND on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#high_volume_out_bound ConnectInstance#high_volume_out_bound}

---

##### `MessageStreaming`<sup>Optional</sup> <a name="MessageStreaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.messageStreaming"></a>

```go
MessageStreaming interface{}
```

- *Type:* interface{}

Boolean flag which enables MESSAGE_STREAMING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#message_streaming ConnectInstance#message_streaming}

---

##### `MultiPartyChatConference`<sup>Optional</sup> <a name="MultiPartyChatConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyChatConference"></a>

```go
MultiPartyChatConference interface{}
```

- *Type:* interface{}

Boolean flag which enables MULTI_PARTY_CHAT_CONFERENCE on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#multi_party_chat_conference ConnectInstance#multi_party_chat_conference}

---

##### `MultiPartyConference`<sup>Optional</sup> <a name="MultiPartyConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyConference"></a>

```go
MultiPartyConference interface{}
```

- *Type:* interface{}

Boolean flag which enables MULTI_PARTY_CONFERENCE on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#multi_party_conference ConnectInstance#multi_party_conference}

---

##### `UseCustomTtsVoices`<sup>Optional</sup> <a name="UseCustomTtsVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.useCustomTtsVoices"></a>

```go
UseCustomTtsVoices interface{}
```

- *Type:* interface{}

Boolean flag which enables USE_CUSTOM_TTS_VOICES on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#use_custom_tts_voices ConnectInstance#use_custom_tts_voices}

---

### ConnectInstanceConfig <a name="ConnectInstanceConfig" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstance"

&connectinstance.ConnectInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Attributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectInstance.ConnectInstanceAttributes,
	IdentityManagementType: *string,
	DirectoryId: *string,
	InstanceAlias: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a></code> | The attributes for the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.identityManagementType">IdentityManagementType</a></code> | <code>*string</code> | Specifies the type of directory integration for new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.directoryId">DirectoryId</a></code> | <code>*string</code> | Existing directoryId user wants to map to the new Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.instanceAlias">InstanceAlias</a></code> | <code>*string</code> | Alias of the new directory created as part of new instance creation. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.attributes"></a>

```go
Attributes ConnectInstanceAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

The attributes for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#attributes ConnectInstance#attributes}

---

##### `IdentityManagementType`<sup>Required</sup> <a name="IdentityManagementType" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.identityManagementType"></a>

```go
IdentityManagementType *string
```

- *Type:* *string

Specifies the type of directory integration for new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#identity_management_type ConnectInstance#identity_management_type}

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.directoryId"></a>

```go
DirectoryId *string
```

- *Type:* *string

Existing directoryId user wants to map to the new Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#directory_id ConnectInstance#directory_id}

---

##### `InstanceAlias`<sup>Optional</sup> <a name="InstanceAlias" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.instanceAlias"></a>

```go
InstanceAlias *string
```

- *Type:* *string

Alias of the new directory created as part of new instance creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#instance_alias ConnectInstance#instance_alias}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#tags ConnectInstance#tags}

---

### ConnectInstanceTags <a name="ConnectInstanceTags" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstance"

&connectinstance.ConnectInstanceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#key ConnectInstance#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance#value ConnectInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectInstanceAttributesOutputReference <a name="ConnectInstanceAttributesOutputReference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstance"

connectinstance.NewConnectInstanceAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectInstanceAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetAutoResolveBestVoices">ResetAutoResolveBestVoices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactflowLogs">ResetContactflowLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactLens">ResetContactLens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEarlyMedia">ResetEarlyMedia</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedChatMonitoring">ResetEnhancedChatMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedContactMonitoring">ResetEnhancedContactMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetHighVolumeOutBound">ResetHighVolumeOutBound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMessageStreaming">ResetMessageStreaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyChatConference">ResetMultiPartyChatConference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyConference">ResetMultiPartyConference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetUseCustomTtsVoices">ResetUseCustomTtsVoices</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoResolveBestVoices` <a name="ResetAutoResolveBestVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetAutoResolveBestVoices"></a>

```go
func ResetAutoResolveBestVoices()
```

##### `ResetContactflowLogs` <a name="ResetContactflowLogs" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactflowLogs"></a>

```go
func ResetContactflowLogs()
```

##### `ResetContactLens` <a name="ResetContactLens" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactLens"></a>

```go
func ResetContactLens()
```

##### `ResetEarlyMedia` <a name="ResetEarlyMedia" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEarlyMedia"></a>

```go
func ResetEarlyMedia()
```

##### `ResetEnhancedChatMonitoring` <a name="ResetEnhancedChatMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedChatMonitoring"></a>

```go
func ResetEnhancedChatMonitoring()
```

##### `ResetEnhancedContactMonitoring` <a name="ResetEnhancedContactMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedContactMonitoring"></a>

```go
func ResetEnhancedContactMonitoring()
```

##### `ResetHighVolumeOutBound` <a name="ResetHighVolumeOutBound" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetHighVolumeOutBound"></a>

```go
func ResetHighVolumeOutBound()
```

##### `ResetMessageStreaming` <a name="ResetMessageStreaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMessageStreaming"></a>

```go
func ResetMessageStreaming()
```

##### `ResetMultiPartyChatConference` <a name="ResetMultiPartyChatConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyChatConference"></a>

```go
func ResetMultiPartyChatConference()
```

##### `ResetMultiPartyConference` <a name="ResetMultiPartyConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyConference"></a>

```go
func ResetMultiPartyConference()
```

##### `ResetUseCustomTtsVoices` <a name="ResetUseCustomTtsVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetUseCustomTtsVoices"></a>

```go
func ResetUseCustomTtsVoices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoicesInput">AutoResolveBestVoicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogsInput">ContactflowLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLensInput">ContactLensInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMediaInput">EarlyMediaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoringInput">EnhancedChatMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoringInput">EnhancedContactMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBoundInput">HighVolumeOutBoundInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCallsInput">InboundCallsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreamingInput">MessageStreamingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConferenceInput">MultiPartyChatConferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConferenceInput">MultiPartyConferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCallsInput">OutboundCallsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoicesInput">UseCustomTtsVoicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoices">AutoResolveBestVoices</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogs">ContactflowLogs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLens">ContactLens</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMedia">EarlyMedia</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoring">EnhancedChatMonitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoring">EnhancedContactMonitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBound">HighVolumeOutBound</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCalls">InboundCalls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreaming">MessageStreaming</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConference">MultiPartyChatConference</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConference">MultiPartyConference</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCalls">OutboundCalls</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoices">UseCustomTtsVoices</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoResolveBestVoicesInput`<sup>Optional</sup> <a name="AutoResolveBestVoicesInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoicesInput"></a>

```go
func AutoResolveBestVoicesInput() interface{}
```

- *Type:* interface{}

---

##### `ContactflowLogsInput`<sup>Optional</sup> <a name="ContactflowLogsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogsInput"></a>

```go
func ContactflowLogsInput() interface{}
```

- *Type:* interface{}

---

##### `ContactLensInput`<sup>Optional</sup> <a name="ContactLensInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLensInput"></a>

```go
func ContactLensInput() interface{}
```

- *Type:* interface{}

---

##### `EarlyMediaInput`<sup>Optional</sup> <a name="EarlyMediaInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMediaInput"></a>

```go
func EarlyMediaInput() interface{}
```

- *Type:* interface{}

---

##### `EnhancedChatMonitoringInput`<sup>Optional</sup> <a name="EnhancedChatMonitoringInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoringInput"></a>

```go
func EnhancedChatMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `EnhancedContactMonitoringInput`<sup>Optional</sup> <a name="EnhancedContactMonitoringInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoringInput"></a>

```go
func EnhancedContactMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `HighVolumeOutBoundInput`<sup>Optional</sup> <a name="HighVolumeOutBoundInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBoundInput"></a>

```go
func HighVolumeOutBoundInput() interface{}
```

- *Type:* interface{}

---

##### `InboundCallsInput`<sup>Optional</sup> <a name="InboundCallsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCallsInput"></a>

```go
func InboundCallsInput() interface{}
```

- *Type:* interface{}

---

##### `MessageStreamingInput`<sup>Optional</sup> <a name="MessageStreamingInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreamingInput"></a>

```go
func MessageStreamingInput() interface{}
```

- *Type:* interface{}

---

##### `MultiPartyChatConferenceInput`<sup>Optional</sup> <a name="MultiPartyChatConferenceInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConferenceInput"></a>

```go
func MultiPartyChatConferenceInput() interface{}
```

- *Type:* interface{}

---

##### `MultiPartyConferenceInput`<sup>Optional</sup> <a name="MultiPartyConferenceInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConferenceInput"></a>

```go
func MultiPartyConferenceInput() interface{}
```

- *Type:* interface{}

---

##### `OutboundCallsInput`<sup>Optional</sup> <a name="OutboundCallsInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCallsInput"></a>

```go
func OutboundCallsInput() interface{}
```

- *Type:* interface{}

---

##### `UseCustomTtsVoicesInput`<sup>Optional</sup> <a name="UseCustomTtsVoicesInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoicesInput"></a>

```go
func UseCustomTtsVoicesInput() interface{}
```

- *Type:* interface{}

---

##### `AutoResolveBestVoices`<sup>Required</sup> <a name="AutoResolveBestVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoices"></a>

```go
func AutoResolveBestVoices() interface{}
```

- *Type:* interface{}

---

##### `ContactflowLogs`<sup>Required</sup> <a name="ContactflowLogs" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogs"></a>

```go
func ContactflowLogs() interface{}
```

- *Type:* interface{}

---

##### `ContactLens`<sup>Required</sup> <a name="ContactLens" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLens"></a>

```go
func ContactLens() interface{}
```

- *Type:* interface{}

---

##### `EarlyMedia`<sup>Required</sup> <a name="EarlyMedia" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMedia"></a>

```go
func EarlyMedia() interface{}
```

- *Type:* interface{}

---

##### `EnhancedChatMonitoring`<sup>Required</sup> <a name="EnhancedChatMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoring"></a>

```go
func EnhancedChatMonitoring() interface{}
```

- *Type:* interface{}

---

##### `EnhancedContactMonitoring`<sup>Required</sup> <a name="EnhancedContactMonitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoring"></a>

```go
func EnhancedContactMonitoring() interface{}
```

- *Type:* interface{}

---

##### `HighVolumeOutBound`<sup>Required</sup> <a name="HighVolumeOutBound" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBound"></a>

```go
func HighVolumeOutBound() interface{}
```

- *Type:* interface{}

---

##### `InboundCalls`<sup>Required</sup> <a name="InboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCalls"></a>

```go
func InboundCalls() interface{}
```

- *Type:* interface{}

---

##### `MessageStreaming`<sup>Required</sup> <a name="MessageStreaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreaming"></a>

```go
func MessageStreaming() interface{}
```

- *Type:* interface{}

---

##### `MultiPartyChatConference`<sup>Required</sup> <a name="MultiPartyChatConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConference"></a>

```go
func MultiPartyChatConference() interface{}
```

- *Type:* interface{}

---

##### `MultiPartyConference`<sup>Required</sup> <a name="MultiPartyConference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConference"></a>

```go
func MultiPartyConference() interface{}
```

- *Type:* interface{}

---

##### `OutboundCalls`<sup>Required</sup> <a name="OutboundCalls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCalls"></a>

```go
func OutboundCalls() interface{}
```

- *Type:* interface{}

---

##### `UseCustomTtsVoices`<sup>Required</sup> <a name="UseCustomTtsVoices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoices"></a>

```go
func UseCustomTtsVoices() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectInstanceTagsList <a name="ConnectInstanceTagsList" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstance"

connectinstance.NewConnectInstanceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectInstanceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.get"></a>

```go
func Get(index *f64) ConnectInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectInstanceTagsOutputReference <a name="ConnectInstanceTagsOutputReference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstance"

connectinstance.NewConnectInstanceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectInstanceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



