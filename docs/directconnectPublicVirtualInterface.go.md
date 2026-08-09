# `directconnectPublicVirtualInterface` Submodule <a name="`directconnectPublicVirtualInterface` Submodule" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectPublicVirtualInterface <a name="DirectconnectPublicVirtualInterface" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface awscc_directconnect_public_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectpublicvirtualinterface"

directconnectpublicvirtualinterface.NewDirectconnectPublicVirtualInterface(scope Construct, id *string, config DirectconnectPublicVirtualInterfaceConfig) DirectconnectPublicVirtualInterface
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig">DirectconnectPublicVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig">DirectconnectPublicVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putBgpPeers">PutBgpPeers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetAllocatePublicVirtualInterfaceRoleArn">ResetAllocatePublicVirtualInterfaceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRouteFilterPrefixes">ResetRouteFilterPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBgpPeers` <a name="PutBgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putBgpPeers"></a>

```go
func PutBgpPeers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putBgpPeers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllocatePublicVirtualInterfaceRoleArn` <a name="ResetAllocatePublicVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetAllocatePublicVirtualInterfaceRoleArn"></a>

```go
func ResetAllocatePublicVirtualInterfaceRoleArn()
```

##### `ResetRouteFilterPrefixes` <a name="ResetRouteFilterPrefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRouteFilterPrefixes"></a>

```go
func ResetRouteFilterPrefixes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectPublicVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectpublicvirtualinterface"

directconnectpublicvirtualinterface.DirectconnectPublicVirtualInterface_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectpublicvirtualinterface"

directconnectpublicvirtualinterface.DirectconnectPublicVirtualInterface_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectpublicvirtualinterface"

directconnectpublicvirtualinterface.DirectconnectPublicVirtualInterface_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectpublicvirtualinterface"

directconnectpublicvirtualinterface.DirectconnectPublicVirtualInterface_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DirectconnectPublicVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DirectconnectPublicVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DirectconnectPublicVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectPublicVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeers">BgpPeers</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList">DirectconnectPublicVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList">DirectconnectPublicVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceArn">VirtualInterfaceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArnInput">AllocatePublicVirtualInterfaceRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeersInput">BgpPeersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixesInput">RouteFilterPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceNameInput">VirtualInterfaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlanInput">VlanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArn">AllocatePublicVirtualInterfaceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixes">RouteFilterPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceName">VirtualInterfaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlan">Vlan</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BgpPeers`<sup>Required</sup> <a name="BgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeers"></a>

```go
func BgpPeers() DirectconnectPublicVirtualInterfaceBgpPeersList
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList">DirectconnectPublicVirtualInterfaceBgpPeersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tags"></a>

```go
func Tags() DirectconnectPublicVirtualInterfaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList">DirectconnectPublicVirtualInterfaceTagsList</a>

---

##### `VirtualInterfaceArn`<sup>Required</sup> <a name="VirtualInterfaceArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceArn"></a>

```go
func VirtualInterfaceArn() *string
```

- *Type:* *string

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceId"></a>

```go
func VirtualInterfaceId() *string
```

- *Type:* *string

---

##### `AllocatePublicVirtualInterfaceRoleArnInput`<sup>Optional</sup> <a name="AllocatePublicVirtualInterfaceRoleArnInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArnInput"></a>

```go
func AllocatePublicVirtualInterfaceRoleArnInput() *string
```

- *Type:* *string

---

##### `BgpPeersInput`<sup>Optional</sup> <a name="BgpPeersInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeersInput"></a>

```go
func BgpPeersInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `RouteFilterPrefixesInput`<sup>Optional</sup> <a name="RouteFilterPrefixesInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixesInput"></a>

```go
func RouteFilterPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualInterfaceNameInput`<sup>Optional</sup> <a name="VirtualInterfaceNameInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceNameInput"></a>

```go
func VirtualInterfaceNameInput() *string
```

- *Type:* *string

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlanInput"></a>

```go
func VlanInput() *f64
```

- *Type:* *f64

---

##### `AllocatePublicVirtualInterfaceRoleArn`<sup>Required</sup> <a name="AllocatePublicVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArn"></a>

```go
func AllocatePublicVirtualInterfaceRoleArn() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `RouteFilterPrefixes`<sup>Required</sup> <a name="RouteFilterPrefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixes"></a>

```go
func RouteFilterPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `VirtualInterfaceName`<sup>Required</sup> <a name="VirtualInterfaceName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceName"></a>

```go
func VirtualInterfaceName() *string
```

- *Type:* *string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlan"></a>

```go
func Vlan() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectPublicVirtualInterfaceBgpPeers <a name="DirectconnectPublicVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectpublicvirtualinterface"

&directconnectpublicvirtualinterface.DirectconnectPublicVirtualInterfaceBgpPeers {
	AddressFamily: *string,
	Asn: *string,
	AmazonAddress: *string,
	AuthKey: *string,
	BgpPeerId: *string,
	CustomerAddress: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | The address family for the BGP peer. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.asn">Asn</a></code> | <code>*string</code> | The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.amazonAddress">AmazonAddress</a></code> | <code>*string</code> | The IP address assigned to the Amazon interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.authKey">AuthKey</a></code> | <code>*string</code> | The authentication key for BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.bgpPeerId">BgpPeerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#bgp_peer_id DirectconnectPublicVirtualInterface#bgp_peer_id}. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.customerAddress">CustomerAddress</a></code> | <code>*string</code> | The IP address assigned to the customer interface. |

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.addressFamily"></a>

```go
AddressFamily *string
```

- *Type:* *string

The address family for the BGP peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#address_family DirectconnectPublicVirtualInterface#address_family}

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.asn"></a>

```go
Asn *string
```

- *Type:* *string

The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#asn DirectconnectPublicVirtualInterface#asn}

---

##### `AmazonAddress`<sup>Optional</sup> <a name="AmazonAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.amazonAddress"></a>

```go
AmazonAddress *string
```

- *Type:* *string

The IP address assigned to the Amazon interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#amazon_address DirectconnectPublicVirtualInterface#amazon_address}

---

##### `AuthKey`<sup>Optional</sup> <a name="AuthKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.authKey"></a>

```go
AuthKey *string
```

- *Type:* *string

The authentication key for BGP configuration.

This string has a minimum length of 6 characters and and a maximum length of 80 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#auth_key DirectconnectPublicVirtualInterface#auth_key}

---

##### `BgpPeerId`<sup>Optional</sup> <a name="BgpPeerId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.bgpPeerId"></a>

```go
BgpPeerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#bgp_peer_id DirectconnectPublicVirtualInterface#bgp_peer_id}.

---

##### `CustomerAddress`<sup>Optional</sup> <a name="CustomerAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.customerAddress"></a>

```go
CustomerAddress *string
```

- *Type:* *string

The IP address assigned to the customer interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#customer_address DirectconnectPublicVirtualInterface#customer_address}

---

### DirectconnectPublicVirtualInterfaceConfig <a name="DirectconnectPublicVirtualInterfaceConfig" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectpublicvirtualinterface"

&directconnectpublicvirtualinterface.DirectconnectPublicVirtualInterfaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BgpPeers: interface{},
	ConnectionId: *string,
	VirtualInterfaceName: *string,
	Vlan: *f64,
	AllocatePublicVirtualInterfaceRoleArn: *string,
	RouteFilterPrefixes: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.bgpPeers">BgpPeers</a></code> | <code>interface{}</code> | The BGP peers configured on this virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connectionId">ConnectionId</a></code> | <code>*string</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.virtualInterfaceName">VirtualInterfaceName</a></code> | <code>*string</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.vlan">Vlan</a></code> | <code>*f64</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.allocatePublicVirtualInterfaceRoleArn">AllocatePublicVirtualInterfaceRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the role to allocate the public virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.routeFilterPrefixes">RouteFilterPrefixes</a></code> | <code>*[]*string</code> | The routes to be advertised to the AWS network in this region. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the public virtual interface. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BgpPeers`<sup>Required</sup> <a name="BgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.bgpPeers"></a>

```go
BgpPeers interface{}
```

- *Type:* interface{}

The BGP peers configured on this virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#bgp_peers DirectconnectPublicVirtualInterface#bgp_peers}

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#connection_id DirectconnectPublicVirtualInterface#connection_id}

---

##### `VirtualInterfaceName`<sup>Required</sup> <a name="VirtualInterfaceName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.virtualInterfaceName"></a>

```go
VirtualInterfaceName *string
```

- *Type:* *string

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#virtual_interface_name DirectconnectPublicVirtualInterface#virtual_interface_name}

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.vlan"></a>

```go
Vlan *f64
```

- *Type:* *f64

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#vlan DirectconnectPublicVirtualInterface#vlan}

---

##### `AllocatePublicVirtualInterfaceRoleArn`<sup>Optional</sup> <a name="AllocatePublicVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.allocatePublicVirtualInterfaceRoleArn"></a>

```go
AllocatePublicVirtualInterfaceRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the role to allocate the public virtual interface.

Needs directconnect:AllocatePublicVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#allocate_public_virtual_interface_role_arn DirectconnectPublicVirtualInterface#allocate_public_virtual_interface_role_arn}

---

##### `RouteFilterPrefixes`<sup>Optional</sup> <a name="RouteFilterPrefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.routeFilterPrefixes"></a>

```go
RouteFilterPrefixes *[]*string
```

- *Type:* *[]*string

The routes to be advertised to the AWS network in this region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#route_filter_prefixes DirectconnectPublicVirtualInterface#route_filter_prefixes}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the public virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#tags DirectconnectPublicVirtualInterface#tags}

---

### DirectconnectPublicVirtualInterfaceTags <a name="DirectconnectPublicVirtualInterfaceTags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectpublicvirtualinterface"

&directconnectpublicvirtualinterface.DirectconnectPublicVirtualInterfaceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#key DirectconnectPublicVirtualInterface#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_public_virtual_interface#value DirectconnectPublicVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectPublicVirtualInterfaceBgpPeersList <a name="DirectconnectPublicVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectpublicvirtualinterface"

directconnectpublicvirtualinterface.NewDirectconnectPublicVirtualInterfaceBgpPeersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DirectconnectPublicVirtualInterfaceBgpPeersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.get"></a>

```go
func Get(index *f64) DirectconnectPublicVirtualInterfaceBgpPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DirectconnectPublicVirtualInterfaceBgpPeersOutputReference <a name="DirectconnectPublicVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectpublicvirtualinterface"

directconnectpublicvirtualinterface.NewDirectconnectPublicVirtualInterfaceBgpPeersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DirectconnectPublicVirtualInterfaceBgpPeersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress">ResetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAuthKey">ResetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId">ResetBgpPeerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress">ResetCustomerAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmazonAddress` <a name="ResetAmazonAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress"></a>

```go
func ResetAmazonAddress()
```

##### `ResetAuthKey` <a name="ResetAuthKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAuthKey"></a>

```go
func ResetAuthKey()
```

##### `ResetBgpPeerId` <a name="ResetBgpPeerId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId"></a>

```go
func ResetBgpPeerId()
```

##### `ResetCustomerAddress` <a name="ResetCustomerAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress"></a>

```go
func ResetCustomerAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput">AddressFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput">AmazonAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asnInput">AsnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKeyInput">AuthKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput">BgpPeerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput">CustomerAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">AmazonAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asn">Asn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKey">AuthKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">BgpPeerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddress">CustomerAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressFamilyInput`<sup>Optional</sup> <a name="AddressFamilyInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput"></a>

```go
func AddressFamilyInput() *string
```

- *Type:* *string

---

##### `AmazonAddressInput`<sup>Optional</sup> <a name="AmazonAddressInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput"></a>

```go
func AmazonAddressInput() *string
```

- *Type:* *string

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asnInput"></a>

```go
func AsnInput() *string
```

- *Type:* *string

---

##### `AuthKeyInput`<sup>Optional</sup> <a name="AuthKeyInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKeyInput"></a>

```go
func AuthKeyInput() *string
```

- *Type:* *string

---

##### `BgpPeerIdInput`<sup>Optional</sup> <a name="BgpPeerIdInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput"></a>

```go
func BgpPeerIdInput() *string
```

- *Type:* *string

---

##### `CustomerAddressInput`<sup>Optional</sup> <a name="CustomerAddressInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput"></a>

```go
func CustomerAddressInput() *string
```

- *Type:* *string

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```go
func AddressFamily() *string
```

- *Type:* *string

---

##### `AmazonAddress`<sup>Required</sup> <a name="AmazonAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```go
func AmazonAddress() *string
```

- *Type:* *string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```go
func Asn() *string
```

- *Type:* *string

---

##### `AuthKey`<sup>Required</sup> <a name="AuthKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```go
func AuthKey() *string
```

- *Type:* *string

---

##### `BgpPeerId`<sup>Required</sup> <a name="BgpPeerId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```go
func BgpPeerId() *string
```

- *Type:* *string

---

##### `CustomerAddress`<sup>Required</sup> <a name="CustomerAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```go
func CustomerAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DirectconnectPublicVirtualInterfaceTagsList <a name="DirectconnectPublicVirtualInterfaceTagsList" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectpublicvirtualinterface"

directconnectpublicvirtualinterface.NewDirectconnectPublicVirtualInterfaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DirectconnectPublicVirtualInterfaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.get"></a>

```go
func Get(index *f64) DirectconnectPublicVirtualInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DirectconnectPublicVirtualInterfaceTagsOutputReference <a name="DirectconnectPublicVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/directconnectpublicvirtualinterface"

directconnectpublicvirtualinterface.NewDirectconnectPublicVirtualInterfaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DirectconnectPublicVirtualInterfaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



