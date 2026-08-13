# `mediaconnectRouterNetworkInterface` Submodule <a name="`mediaconnectRouterNetworkInterface` Submodule" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectRouterNetworkInterface <a name="MediaconnectRouterNetworkInterface" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface awscc_mediaconnect_router_network_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

mediaconnectrouternetworkinterface.NewMediaconnectRouterNetworkInterface(scope Construct, id *string, config MediaconnectRouterNetworkInterfaceConfig) MediaconnectRouterNetworkInterface
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig">MediaconnectRouterNetworkInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig">MediaconnectRouterNetworkInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.resetRegionName">ResetRegionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.putConfiguration"></a>

```go
func PutConfiguration(value MediaconnectRouterNetworkInterfaceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration">MediaconnectRouterNetworkInterfaceConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRegionName` <a name="ResetRegionName" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.resetRegionName"></a>

```go
func ResetRegionName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectRouterNetworkInterface resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

mediaconnectrouternetworkinterface.MediaconnectRouterNetworkInterface_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

mediaconnectrouternetworkinterface.MediaconnectRouterNetworkInterface_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

mediaconnectrouternetworkinterface.MediaconnectRouterNetworkInterface_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

mediaconnectrouternetworkinterface.MediaconnectRouterNetworkInterface_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediaconnectRouterNetworkInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaconnectRouterNetworkInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaconnectRouterNetworkInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectRouterNetworkInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.associatedInputCount">AssociatedInputCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.associatedOutputCount">AssociatedOutputCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference">MediaconnectRouterNetworkInterfaceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.networkInterfaceType">NetworkInterfaceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.routerNetworkInterfaceId">RouterNetworkInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList">MediaconnectRouterNetworkInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.configurationInput">ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.regionNameInput">RegionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssociatedInputCount`<sup>Required</sup> <a name="AssociatedInputCount" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.associatedInputCount"></a>

```go
func AssociatedInputCount() *f64
```

- *Type:* *f64

---

##### `AssociatedOutputCount`<sup>Required</sup> <a name="AssociatedOutputCount" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.associatedOutputCount"></a>

```go
func AssociatedOutputCount() *f64
```

- *Type:* *f64

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.configuration"></a>

```go
func Configuration() MediaconnectRouterNetworkInterfaceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference">MediaconnectRouterNetworkInterfaceConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkInterfaceType`<sup>Required</sup> <a name="NetworkInterfaceType" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.networkInterfaceType"></a>

```go
func NetworkInterfaceType() *string
```

- *Type:* *string

---

##### `RouterNetworkInterfaceId`<sup>Required</sup> <a name="RouterNetworkInterfaceId" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.routerNetworkInterfaceId"></a>

```go
func RouterNetworkInterfaceId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.tags"></a>

```go
func Tags() MediaconnectRouterNetworkInterfaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList">MediaconnectRouterNetworkInterfaceTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.configurationInput"></a>

```go
func ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.regionNameInput"></a>

```go
func RegionNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterface.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectRouterNetworkInterfaceConfig <a name="MediaconnectRouterNetworkInterfaceConfig" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

&mediaconnectrouternetworkinterface.MediaconnectRouterNetworkInterfaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration,
	Name: *string,
	RegionName: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration">MediaconnectRouterNetworkInterfaceConfiguration</a></code> | The configuration settings for a router network interface. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.name">Name</a></code> | <code>*string</code> | The name of the router network interface. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.regionName">RegionName</a></code> | <code>*string</code> | The AWS Region for the router network interface. Defaults to the current region if not specified. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Key-value pairs that can be used to tag and organize this router network interface. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.configuration"></a>

```go
Configuration MediaconnectRouterNetworkInterfaceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration">MediaconnectRouterNetworkInterfaceConfiguration</a>

The configuration settings for a router network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface#configuration MediaconnectRouterNetworkInterface#configuration}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the router network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface#name MediaconnectRouterNetworkInterface#name}

---

##### `RegionName`<sup>Optional</sup> <a name="RegionName" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.regionName"></a>

```go
RegionName *string
```

- *Type:* *string

The AWS Region for the router network interface. Defaults to the current region if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface#region_name MediaconnectRouterNetworkInterface#region_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Key-value pairs that can be used to tag and organize this router network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface#tags MediaconnectRouterNetworkInterface#tags}

---

### MediaconnectRouterNetworkInterfaceConfiguration <a name="MediaconnectRouterNetworkInterfaceConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

&mediaconnectrouternetworkinterface.MediaconnectRouterNetworkInterfaceConfiguration {
	Public: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic,
	Vpc: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration.property.public">Public</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic">MediaconnectRouterNetworkInterfaceConfigurationPublic</a></code> | The configuration settings for a public router network interface, including the list of allowed CIDR blocks. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc">MediaconnectRouterNetworkInterfaceConfigurationVpc</a></code> | The configuration settings for a router network interface within a VPC, including the security group IDs and subnet ID. |

---

##### `Public`<sup>Optional</sup> <a name="Public" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration.property.public"></a>

```go
Public MediaconnectRouterNetworkInterfaceConfigurationPublic
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic">MediaconnectRouterNetworkInterfaceConfigurationPublic</a>

The configuration settings for a public router network interface, including the list of allowed CIDR blocks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface#public MediaconnectRouterNetworkInterface#public}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfiguration.property.vpc"></a>

```go
Vpc MediaconnectRouterNetworkInterfaceConfigurationVpc
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc">MediaconnectRouterNetworkInterfaceConfigurationVpc</a>

The configuration settings for a router network interface within a VPC, including the security group IDs and subnet ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface#vpc MediaconnectRouterNetworkInterface#vpc}

---

### MediaconnectRouterNetworkInterfaceConfigurationPublic <a name="MediaconnectRouterNetworkInterfaceConfigurationPublic" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

&mediaconnectrouternetworkinterface.MediaconnectRouterNetworkInterfaceConfigurationPublic {
	AllowRules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic.property.allowRules">AllowRules</a></code> | <code>interface{}</code> | The list of allowed CIDR blocks for the public router network interface. |

---

##### `AllowRules`<sup>Optional</sup> <a name="AllowRules" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic.property.allowRules"></a>

```go
AllowRules interface{}
```

- *Type:* interface{}

The list of allowed CIDR blocks for the public router network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface#allow_rules MediaconnectRouterNetworkInterface#allow_rules}

---

### MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules <a name="MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

&mediaconnectrouternetworkinterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules {
	Cidr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules.property.cidr">Cidr</a></code> | <code>*string</code> | The CIDR block that is allowed to access the public router network interface. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRules.property.cidr"></a>

```go
Cidr *string
```

- *Type:* *string

The CIDR block that is allowed to access the public router network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface#cidr MediaconnectRouterNetworkInterface#cidr}

---

### MediaconnectRouterNetworkInterfaceConfigurationVpc <a name="MediaconnectRouterNetworkInterfaceConfigurationVpc" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

&mediaconnectrouternetworkinterface.MediaconnectRouterNetworkInterfaceConfigurationVpc {
	SecurityGroupIds: *[]*string,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The IDs of the security groups to associate with the router network interface within the VPC. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc.property.subnetId">SubnetId</a></code> | <code>*string</code> | The ID of the subnet within the VPC to associate the router network interface with. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The IDs of the security groups to associate with the router network interface within the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface#security_group_ids MediaconnectRouterNetworkInterface#security_group_ids}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

The ID of the subnet within the VPC to associate the router network interface with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface#subnet_id MediaconnectRouterNetworkInterface#subnet_id}

---

### MediaconnectRouterNetworkInterfaceTags <a name="MediaconnectRouterNetworkInterfaceTags" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

&mediaconnectrouternetworkinterface.MediaconnectRouterNetworkInterfaceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface#key MediaconnectRouterNetworkInterface#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface#value MediaconnectRouterNetworkInterface#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface#key MediaconnectRouterNetworkInterface#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_network_interface#value MediaconnectRouterNetworkInterface#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectRouterNetworkInterfaceConfigurationOutputReference <a name="MediaconnectRouterNetworkInterfaceConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

mediaconnectrouternetworkinterface.NewMediaconnectRouterNetworkInterfaceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterNetworkInterfaceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.putPublic">PutPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.putVpc">PutVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.resetPublic">ResetPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublic` <a name="PutPublic" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.putPublic"></a>

```go
func PutPublic(value MediaconnectRouterNetworkInterfaceConfigurationPublic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.putPublic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublic">MediaconnectRouterNetworkInterfaceConfigurationPublic</a>

---

##### `PutVpc` <a name="PutVpc" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.putVpc"></a>

```go
func PutVpc(value MediaconnectRouterNetworkInterfaceConfigurationVpc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpc">MediaconnectRouterNetworkInterfaceConfigurationVpc</a>

---

##### `ResetPublic` <a name="ResetPublic" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.resetPublic"></a>

```go
func ResetPublic()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.resetVpc"></a>

```go
func ResetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.public">Public</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference">MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference">MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.publicInput">PublicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.vpcInput">VpcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Public`<sup>Required</sup> <a name="Public" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.public"></a>

```go
func Public() MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference">MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference</a>

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.vpc"></a>

```go
func Vpc() MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference">MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference</a>

---

##### `PublicInput`<sup>Optional</sup> <a name="PublicInput" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.publicInput"></a>

```go
func PublicInput() interface{}
```

- *Type:* interface{}

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.vpcInput"></a>

```go
func VpcInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList <a name="MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

mediaconnectrouternetworkinterface.NewMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.get"></a>

```go
func Get(index *f64) MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference <a name="MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

mediaconnectrouternetworkinterface.NewMediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.resetCidr"></a>

```go
func ResetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.cidrInput">CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.cidrInput"></a>

```go
func CidrInput() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference <a name="MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

mediaconnectrouternetworkinterface.NewMediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.putAllowRules">PutAllowRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resetAllowRules">ResetAllowRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowRules` <a name="PutAllowRules" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.putAllowRules"></a>

```go
func PutAllowRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.putAllowRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowRules` <a name="ResetAllowRules" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.resetAllowRules"></a>

```go
func ResetAllowRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.allowRules">AllowRules</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList">MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.allowRulesInput">AllowRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowRules`<sup>Required</sup> <a name="AllowRules" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.allowRules"></a>

```go
func AllowRules() MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList">MediaconnectRouterNetworkInterfaceConfigurationPublicAllowRulesList</a>

---

##### `AllowRulesInput`<sup>Optional</sup> <a name="AllowRulesInput" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.allowRulesInput"></a>

```go
func AllowRulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationPublicOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference <a name="MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

mediaconnectrouternetworkinterface.NewMediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceConfigurationVpcOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterNetworkInterfaceTagsList <a name="MediaconnectRouterNetworkInterfaceTagsList" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

mediaconnectrouternetworkinterface.NewMediaconnectRouterNetworkInterfaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconnectRouterNetworkInterfaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.get"></a>

```go
func Get(index *f64) MediaconnectRouterNetworkInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterNetworkInterfaceTagsOutputReference <a name="MediaconnectRouterNetworkInterfaceTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouternetworkinterface"

mediaconnectrouternetworkinterface.NewMediaconnectRouterNetworkInterfaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconnectRouterNetworkInterfaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterNetworkInterface.MediaconnectRouterNetworkInterfaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



