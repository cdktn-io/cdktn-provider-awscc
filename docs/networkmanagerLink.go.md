# `networkmanagerLink` Submodule <a name="`networkmanagerLink` Submodule" id="@cdktn/provider-awscc.networkmanagerLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerLink <a name="NetworkmanagerLink" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link awscc_networkmanager_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerlink"

networkmanagerlink.NewNetworkmanagerLink(scope Construct, id *string, config NetworkmanagerLinkConfig) NetworkmanagerLink
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig">NetworkmanagerLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig">NetworkmanagerLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putBandwidth">PutBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetProviderName">ResetProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBandwidth` <a name="PutBandwidth" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putBandwidth"></a>

```go
func PutBandwidth(value NetworkmanagerLinkBandwidth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putBandwidth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetProviderName` <a name="ResetProviderName" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetProviderName"></a>

```go
func ResetProviderName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetTags"></a>

```go
func ResetTags()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerLink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerlink"

networkmanagerlink.NetworkmanagerLink_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerlink"

networkmanagerlink.NetworkmanagerLink_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerlink"

networkmanagerlink.NetworkmanagerLink_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerlink"

networkmanagerlink.NetworkmanagerLink_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkmanagerLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkmanagerLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkmanagerLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.bandwidth">Bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference">NetworkmanagerLinkBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.linkArn">LinkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.linkId">LinkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList">NetworkmanagerLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.bandwidthInput">BandwidthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.globalNetworkIdInput">GlobalNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.siteIdInput">SiteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.globalNetworkId">GlobalNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.siteId">SiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.bandwidth"></a>

```go
func Bandwidth() NetworkmanagerLinkBandwidthOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference">NetworkmanagerLinkBandwidthOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkArn`<sup>Required</sup> <a name="LinkArn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.linkArn"></a>

```go
func LinkArn() *string
```

- *Type:* *string

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.linkId"></a>

```go
func LinkId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tags"></a>

```go
func Tags() NetworkmanagerLinkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList">NetworkmanagerLinkTagsList</a>

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.bandwidthInput"></a>

```go
func BandwidthInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GlobalNetworkIdInput`<sup>Optional</sup> <a name="GlobalNetworkIdInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.globalNetworkIdInput"></a>

```go
func GlobalNetworkIdInput() *string
```

- *Type:* *string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `SiteIdInput`<sup>Optional</sup> <a name="SiteIdInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.siteIdInput"></a>

```go
func SiteIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GlobalNetworkId`<sup>Required</sup> <a name="GlobalNetworkId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.globalNetworkId"></a>

```go
func GlobalNetworkId() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.siteId"></a>

```go
func SiteId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLink.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerLinkBandwidth <a name="NetworkmanagerLinkBandwidth" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerlink"

&networkmanagerlink.NetworkmanagerLinkBandwidth {
	DownloadSpeed: *f64,
	UploadSpeed: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth.property.downloadSpeed">DownloadSpeed</a></code> | <code>*f64</code> | Download speed in Mbps. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth.property.uploadSpeed">UploadSpeed</a></code> | <code>*f64</code> | Upload speed in Mbps. |

---

##### `DownloadSpeed`<sup>Optional</sup> <a name="DownloadSpeed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth.property.downloadSpeed"></a>

```go
DownloadSpeed *f64
```

- *Type:* *f64

Download speed in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#download_speed NetworkmanagerLink#download_speed}

---

##### `UploadSpeed`<sup>Optional</sup> <a name="UploadSpeed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth.property.uploadSpeed"></a>

```go
UploadSpeed *f64
```

- *Type:* *f64

Upload speed in Mbps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#upload_speed NetworkmanagerLink#upload_speed}

---

### NetworkmanagerLinkConfig <a name="NetworkmanagerLinkConfig" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerlink"

&networkmanagerlink.NetworkmanagerLinkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Bandwidth: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkmanagerLink.NetworkmanagerLinkBandwidth,
	GlobalNetworkId: *string,
	SiteId: *string,
	Description: *string,
	ProviderName: *string,
	Tags: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.bandwidth">Bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a></code> | The Bandwidth for the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.globalNetworkId">GlobalNetworkId</a></code> | <code>*string</code> | The ID of the global network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.siteId">SiteId</a></code> | <code>*string</code> | The ID of the site. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.description">Description</a></code> | <code>*string</code> | The description of the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.providerName">ProviderName</a></code> | <code>*string</code> | The provider of the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags for the link. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.type">Type</a></code> | <code>*string</code> | The type of the link. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.bandwidth"></a>

```go
Bandwidth NetworkmanagerLinkBandwidth
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidth">NetworkmanagerLinkBandwidth</a>

The Bandwidth for the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#bandwidth NetworkmanagerLink#bandwidth}

---

##### `GlobalNetworkId`<sup>Required</sup> <a name="GlobalNetworkId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.globalNetworkId"></a>

```go
GlobalNetworkId *string
```

- *Type:* *string

The ID of the global network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#global_network_id NetworkmanagerLink#global_network_id}

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.siteId"></a>

```go
SiteId *string
```

- *Type:* *string

The ID of the site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#site_id NetworkmanagerLink#site_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#description NetworkmanagerLink#description}

---

##### `ProviderName`<sup>Optional</sup> <a name="ProviderName" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

The provider of the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#provider_name NetworkmanagerLink#provider_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags for the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#tags NetworkmanagerLink#tags}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#type NetworkmanagerLink#type}

---

### NetworkmanagerLinkTags <a name="NetworkmanagerLinkTags" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerlink"

&networkmanagerlink.NetworkmanagerLinkTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#key NetworkmanagerLink#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkmanager_link#value NetworkmanagerLink#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerLinkBandwidthOutputReference <a name="NetworkmanagerLinkBandwidthOutputReference" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerlink"

networkmanagerlink.NewNetworkmanagerLinkBandwidthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkmanagerLinkBandwidthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetDownloadSpeed">ResetDownloadSpeed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetUploadSpeed">ResetUploadSpeed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDownloadSpeed` <a name="ResetDownloadSpeed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetDownloadSpeed"></a>

```go
func ResetDownloadSpeed()
```

##### `ResetUploadSpeed` <a name="ResetUploadSpeed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.resetUploadSpeed"></a>

```go
func ResetUploadSpeed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeedInput">DownloadSpeedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeedInput">UploadSpeedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeed">DownloadSpeed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeed">UploadSpeed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DownloadSpeedInput`<sup>Optional</sup> <a name="DownloadSpeedInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeedInput"></a>

```go
func DownloadSpeedInput() *f64
```

- *Type:* *f64

---

##### `UploadSpeedInput`<sup>Optional</sup> <a name="UploadSpeedInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeedInput"></a>

```go
func UploadSpeedInput() *f64
```

- *Type:* *f64

---

##### `DownloadSpeed`<sup>Required</sup> <a name="DownloadSpeed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.downloadSpeed"></a>

```go
func DownloadSpeed() *f64
```

- *Type:* *f64

---

##### `UploadSpeed`<sup>Required</sup> <a name="UploadSpeed" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.uploadSpeed"></a>

```go
func UploadSpeed() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkBandwidthOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkmanagerLinkTagsList <a name="NetworkmanagerLinkTagsList" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerlink"

networkmanagerlink.NewNetworkmanagerLinkTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkmanagerLinkTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.get"></a>

```go
func Get(index *f64) NetworkmanagerLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkmanagerLinkTagsOutputReference <a name="NetworkmanagerLinkTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkmanagerlink"

networkmanagerlink.NewNetworkmanagerLinkTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkmanagerLinkTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerLink.NetworkmanagerLinkTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



