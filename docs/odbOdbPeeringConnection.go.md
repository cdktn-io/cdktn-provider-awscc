# `odbOdbPeeringConnection` Submodule <a name="`odbOdbPeeringConnection` Submodule" id="@cdktn/provider-awscc.odbOdbPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbOdbPeeringConnection <a name="OdbOdbPeeringConnection" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection awscc_odb_odb_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbodbpeeringconnection"

odbodbpeeringconnection.NewOdbOdbPeeringConnection(scope Construct, id *string, config OdbOdbPeeringConnectionConfig) OdbOdbPeeringConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig">OdbOdbPeeringConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig">OdbOdbPeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetAdditionalPeerNetworkCidrs">ResetAdditionalPeerNetworkCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOdbNetworkId">ResetOdbNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkId">ResetPeerNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkRouteTableIds">ResetPeerNetworkRouteTableIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalPeerNetworkCidrs` <a name="ResetAdditionalPeerNetworkCidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetAdditionalPeerNetworkCidrs"></a>

```go
func ResetAdditionalPeerNetworkCidrs()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetOdbNetworkId` <a name="ResetOdbNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetOdbNetworkId"></a>

```go
func ResetOdbNetworkId()
```

##### `ResetPeerNetworkId` <a name="ResetPeerNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkId"></a>

```go
func ResetPeerNetworkId()
```

##### `ResetPeerNetworkRouteTableIds` <a name="ResetPeerNetworkRouteTableIds" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetPeerNetworkRouteTableIds"></a>

```go
func ResetPeerNetworkRouteTableIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OdbOdbPeeringConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbodbpeeringconnection"

odbodbpeeringconnection.OdbOdbPeeringConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbodbpeeringconnection"

odbodbpeeringconnection.OdbOdbPeeringConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbodbpeeringconnection"

odbodbpeeringconnection.OdbOdbPeeringConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbodbpeeringconnection"

odbodbpeeringconnection.OdbOdbPeeringConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OdbOdbPeeringConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OdbOdbPeeringConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OdbOdbPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OdbOdbPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkArn">OdbNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionArn">OdbPeeringConnectionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionId">OdbPeeringConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkArn">PeerNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkCidrs">PeerNetworkCidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList">OdbOdbPeeringConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrsInput">AdditionalPeerNetworkCidrsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkIdInput">OdbNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkIdInput">PeerNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIdsInput">PeerNetworkRouteTableIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrs">AdditionalPeerNetworkCidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkId">OdbNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkId">PeerNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIds">PeerNetworkRouteTableIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OdbNetworkArn`<sup>Required</sup> <a name="OdbNetworkArn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkArn"></a>

```go
func OdbNetworkArn() *string
```

- *Type:* *string

---

##### `OdbPeeringConnectionArn`<sup>Required</sup> <a name="OdbPeeringConnectionArn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionArn"></a>

```go
func OdbPeeringConnectionArn() *string
```

- *Type:* *string

---

##### `OdbPeeringConnectionId`<sup>Required</sup> <a name="OdbPeeringConnectionId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbPeeringConnectionId"></a>

```go
func OdbPeeringConnectionId() *string
```

- *Type:* *string

---

##### `PeerNetworkArn`<sup>Required</sup> <a name="PeerNetworkArn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkArn"></a>

```go
func PeerNetworkArn() *string
```

- *Type:* *string

---

##### `PeerNetworkCidrs`<sup>Required</sup> <a name="PeerNetworkCidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkCidrs"></a>

```go
func PeerNetworkCidrs() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tags"></a>

```go
func Tags() OdbOdbPeeringConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList">OdbOdbPeeringConnectionTagsList</a>

---

##### `AdditionalPeerNetworkCidrsInput`<sup>Optional</sup> <a name="AdditionalPeerNetworkCidrsInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrsInput"></a>

```go
func AdditionalPeerNetworkCidrsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `OdbNetworkIdInput`<sup>Optional</sup> <a name="OdbNetworkIdInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkIdInput"></a>

```go
func OdbNetworkIdInput() *string
```

- *Type:* *string

---

##### `PeerNetworkIdInput`<sup>Optional</sup> <a name="PeerNetworkIdInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkIdInput"></a>

```go
func PeerNetworkIdInput() *string
```

- *Type:* *string

---

##### `PeerNetworkRouteTableIdsInput`<sup>Optional</sup> <a name="PeerNetworkRouteTableIdsInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIdsInput"></a>

```go
func PeerNetworkRouteTableIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalPeerNetworkCidrs`<sup>Required</sup> <a name="AdditionalPeerNetworkCidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.additionalPeerNetworkCidrs"></a>

```go
func AdditionalPeerNetworkCidrs() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `OdbNetworkId`<sup>Required</sup> <a name="OdbNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.odbNetworkId"></a>

```go
func OdbNetworkId() *string
```

- *Type:* *string

---

##### `PeerNetworkId`<sup>Required</sup> <a name="PeerNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkId"></a>

```go
func PeerNetworkId() *string
```

- *Type:* *string

---

##### `PeerNetworkRouteTableIds`<sup>Required</sup> <a name="PeerNetworkRouteTableIds" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.peerNetworkRouteTableIds"></a>

```go
func PeerNetworkRouteTableIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbOdbPeeringConnectionConfig <a name="OdbOdbPeeringConnectionConfig" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbodbpeeringconnection"

&odbodbpeeringconnection.OdbOdbPeeringConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AdditionalPeerNetworkCidrs: *[]*string,
	DisplayName: *string,
	OdbNetworkId: *string,
	PeerNetworkId: *string,
	PeerNetworkRouteTableIds: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.additionalPeerNetworkCidrs">AdditionalPeerNetworkCidrs</a></code> | <code>*[]*string</code> | The additional CIDR blocks for the ODB peering connection. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The name of the ODB peering connection. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.odbNetworkId">OdbNetworkId</a></code> | <code>*string</code> | The unique identifier of the ODB network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkId">PeerNetworkId</a></code> | <code>*string</code> | The unique identifier of the peer network. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkRouteTableIds">PeerNetworkRouteTableIds</a></code> | <code>*[]*string</code> | The unique identifier of the VPC route table for which a route to the ODB network is automatically created during peering connection establishment. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to assign to the Odb peering connection. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalPeerNetworkCidrs`<sup>Optional</sup> <a name="AdditionalPeerNetworkCidrs" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.additionalPeerNetworkCidrs"></a>

```go
AdditionalPeerNetworkCidrs *[]*string
```

- *Type:* *[]*string

The additional CIDR blocks for the ODB peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#additional_peer_network_cidrs OdbOdbPeeringConnection#additional_peer_network_cidrs}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The name of the ODB peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#display_name OdbOdbPeeringConnection#display_name}

---

##### `OdbNetworkId`<sup>Optional</sup> <a name="OdbNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.odbNetworkId"></a>

```go
OdbNetworkId *string
```

- *Type:* *string

The unique identifier of the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#odb_network_id OdbOdbPeeringConnection#odb_network_id}

---

##### `PeerNetworkId`<sup>Optional</sup> <a name="PeerNetworkId" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkId"></a>

```go
PeerNetworkId *string
```

- *Type:* *string

The unique identifier of the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#peer_network_id OdbOdbPeeringConnection#peer_network_id}

---

##### `PeerNetworkRouteTableIds`<sup>Optional</sup> <a name="PeerNetworkRouteTableIds" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.peerNetworkRouteTableIds"></a>

```go
PeerNetworkRouteTableIds *[]*string
```

- *Type:* *[]*string

The unique identifier of the VPC route table for which a route to the ODB network is automatically created during peering connection establishment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#peer_network_route_table_ids OdbOdbPeeringConnection#peer_network_route_table_ids}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to assign to the Odb peering connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#tags OdbOdbPeeringConnection#tags}

---

### OdbOdbPeeringConnectionTags <a name="OdbOdbPeeringConnectionTags" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbodbpeeringconnection"

&odbodbpeeringconnection.OdbOdbPeeringConnectionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/odb_odb_peering_connection#value OdbOdbPeeringConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbOdbPeeringConnectionTagsList <a name="OdbOdbPeeringConnectionTagsList" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbodbpeeringconnection"

odbodbpeeringconnection.NewOdbOdbPeeringConnectionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OdbOdbPeeringConnectionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.get"></a>

```go
func Get(index *f64) OdbOdbPeeringConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OdbOdbPeeringConnectionTagsOutputReference <a name="OdbOdbPeeringConnectionTagsOutputReference" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/odbodbpeeringconnection"

odbodbpeeringconnection.NewOdbOdbPeeringConnectionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OdbOdbPeeringConnectionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.odbOdbPeeringConnection.OdbOdbPeeringConnectionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



