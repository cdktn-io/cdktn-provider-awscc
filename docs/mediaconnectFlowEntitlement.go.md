# `mediaconnectFlowEntitlement` Submodule <a name="`mediaconnectFlowEntitlement` Submodule" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlowEntitlement <a name="MediaconnectFlowEntitlement" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement awscc_mediaconnect_flow_entitlement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowentitlement"

mediaconnectflowentitlement.NewMediaconnectFlowEntitlement(scope Construct, id *string, config MediaconnectFlowEntitlementConfig) MediaconnectFlowEntitlement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig">MediaconnectFlowEntitlementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig">MediaconnectFlowEntitlementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetDataTransferSubscriberFeePercent">ResetDataTransferSubscriberFeePercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEntitlementStatus">ResetEntitlementStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption"></a>

```go
func PutEncryption(value MediaconnectFlowEntitlementEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataTransferSubscriberFeePercent` <a name="ResetDataTransferSubscriberFeePercent" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetDataTransferSubscriberFeePercent"></a>

```go
func ResetDataTransferSubscriberFeePercent()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetEntitlementStatus` <a name="ResetEntitlementStatus" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEntitlementStatus"></a>

```go
func ResetEntitlementStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectFlowEntitlement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowentitlement"

mediaconnectflowentitlement.MediaconnectFlowEntitlement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowentitlement"

mediaconnectflowentitlement.MediaconnectFlowEntitlement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowentitlement"

mediaconnectflowentitlement.MediaconnectFlowEntitlement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowentitlement"

mediaconnectflowentitlement.MediaconnectFlowEntitlement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediaconnectFlowEntitlement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaconnectFlowEntitlement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaconnectFlowEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlowEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference">MediaconnectFlowEntitlementEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementArn">EntitlementArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList">MediaconnectFlowEntitlementTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercentInput">DataTransferSubscriberFeePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryptionInput">EncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatusInput">EntitlementStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArnInput">FlowArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribersInput">SubscribersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercent">DataTransferSubscriberFeePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatus">EntitlementStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArn">FlowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribers">Subscribers</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryption"></a>

```go
func Encryption() MediaconnectFlowEntitlementEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference">MediaconnectFlowEntitlementEncryptionOutputReference</a>

---

##### `EntitlementArn`<sup>Required</sup> <a name="EntitlementArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementArn"></a>

```go
func EntitlementArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tags"></a>

```go
func Tags() MediaconnectFlowEntitlementTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList">MediaconnectFlowEntitlementTagsList</a>

---

##### `DataTransferSubscriberFeePercentInput`<sup>Optional</sup> <a name="DataTransferSubscriberFeePercentInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercentInput"></a>

```go
func DataTransferSubscriberFeePercentInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryptionInput"></a>

```go
func EncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EntitlementStatusInput`<sup>Optional</sup> <a name="EntitlementStatusInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatusInput"></a>

```go
func EntitlementStatusInput() *string
```

- *Type:* *string

---

##### `FlowArnInput`<sup>Optional</sup> <a name="FlowArnInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArnInput"></a>

```go
func FlowArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SubscribersInput`<sup>Optional</sup> <a name="SubscribersInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribersInput"></a>

```go
func SubscribersInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DataTransferSubscriberFeePercent`<sup>Required</sup> <a name="DataTransferSubscriberFeePercent" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercent"></a>

```go
func DataTransferSubscriberFeePercent() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EntitlementStatus`<sup>Required</sup> <a name="EntitlementStatus" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatus"></a>

```go
func EntitlementStatus() *string
```

- *Type:* *string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArn"></a>

```go
func FlowArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Subscribers`<sup>Required</sup> <a name="Subscribers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribers"></a>

```go
func Subscribers() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowEntitlementConfig <a name="MediaconnectFlowEntitlementConfig" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowentitlement"

&mediaconnectflowentitlement.MediaconnectFlowEntitlementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	FlowArn: *string,
	Name: *string,
	Subscribers: *[]*string,
	DataTransferSubscriberFeePercent: *f64,
	Encryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption,
	EntitlementStatus: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.description">Description</a></code> | <code>*string</code> | A description of the entitlement. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.flowArn">FlowArn</a></code> | <code>*string</code> | The ARN of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.name">Name</a></code> | <code>*string</code> | The name of the entitlement. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.subscribers">Subscribers</a></code> | <code>*[]*string</code> | The AWS account IDs that you want to share your content with. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dataTransferSubscriberFeePercent">DataTransferSubscriberFeePercent</a></code> | <code>*f64</code> | Percentage from 0-100 of the data transfer cost to be billed to the subscriber. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a></code> | The type of encryption that will be used on the output that is associated with this entitlement. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.entitlementStatus">EntitlementStatus</a></code> | <code>*string</code> | An indication of whether the entitlement is enabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Key-value pairs that can be used to tag and organize this flow entitlement. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#description MediaconnectFlowEntitlement#description}

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.flowArn"></a>

```go
FlowArn *string
```

- *Type:* *string

The ARN of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#flow_arn MediaconnectFlowEntitlement#flow_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#name MediaconnectFlowEntitlement#name}

---

##### `Subscribers`<sup>Required</sup> <a name="Subscribers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.subscribers"></a>

```go
Subscribers *[]*string
```

- *Type:* *[]*string

The AWS account IDs that you want to share your content with.

The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#subscribers MediaconnectFlowEntitlement#subscribers}

---

##### `DataTransferSubscriberFeePercent`<sup>Optional</sup> <a name="DataTransferSubscriberFeePercent" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dataTransferSubscriberFeePercent"></a>

```go
DataTransferSubscriberFeePercent *f64
```

- *Type:* *f64

Percentage from 0-100 of the data transfer cost to be billed to the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#data_transfer_subscriber_fee_percent MediaconnectFlowEntitlement#data_transfer_subscriber_fee_percent}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.encryption"></a>

```go
Encryption MediaconnectFlowEntitlementEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a>

The type of encryption that will be used on the output that is associated with this entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#encryption MediaconnectFlowEntitlement#encryption}

---

##### `EntitlementStatus`<sup>Optional</sup> <a name="EntitlementStatus" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.entitlementStatus"></a>

```go
EntitlementStatus *string
```

- *Type:* *string

An indication of whether the entitlement is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#entitlement_status MediaconnectFlowEntitlement#entitlement_status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Key-value pairs that can be used to tag and organize this flow entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#tags MediaconnectFlowEntitlement#tags}

---

### MediaconnectFlowEntitlementEncryption <a name="MediaconnectFlowEntitlementEncryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowentitlement"

&mediaconnectflowentitlement.MediaconnectFlowEntitlementEncryption {
	Algorithm: *string,
	ConstantInitializationVector: *string,
	DeviceId: *string,
	KeyType: *string,
	Region: *string,
	ResourceId: *string,
	RoleArn: *string,
	SecretArn: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.algorithm">Algorithm</a></code> | <code>*string</code> | The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>*string</code> | A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.deviceId">DeviceId</a></code> | <code>*string</code> | The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.keyType">KeyType</a></code> | <code>*string</code> | The type of key that is used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.region">Region</a></code> | <code>*string</code> | The AWS Region that the API Gateway proxy endpoint was created in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.resourceId">ResourceId</a></code> | <code>*string</code> | An identifier for the content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.secretArn">SecretArn</a></code> | <code>*string</code> | The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.url">Url</a></code> | <code>*string</code> | The URL from the API Gateway proxy that you set up to talk to your key server. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#algorithm MediaconnectFlowEntitlement#algorithm}

---

##### `ConstantInitializationVector`<sup>Optional</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.constantInitializationVector"></a>

```go
ConstantInitializationVector *string
```

- *Type:* *string

A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.

This parameter is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#constant_initialization_vector MediaconnectFlowEntitlement#constant_initialization_vector}

---

##### `DeviceId`<sup>Optional</sup> <a name="DeviceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.deviceId"></a>

```go
DeviceId *string
```

- *Type:* *string

The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#device_id MediaconnectFlowEntitlement#device_id}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.keyType"></a>

```go
KeyType *string
```

- *Type:* *string

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#key_type MediaconnectFlowEntitlement#key_type}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.region"></a>

```go
Region *string
```

- *Type:* *string

The AWS Region that the API Gateway proxy endpoint was created in.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#region MediaconnectFlowEntitlement#region}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

An identifier for the content.

The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#resource_id MediaconnectFlowEntitlement#resource_id}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#role_arn MediaconnectFlowEntitlement#role_arn}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#secret_arn MediaconnectFlowEntitlement#secret_arn}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.url"></a>

```go
Url *string
```

- *Type:* *string

The URL from the API Gateway proxy that you set up to talk to your key server.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#url MediaconnectFlowEntitlement#url}

---

### MediaconnectFlowEntitlementTags <a name="MediaconnectFlowEntitlementTags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowentitlement"

&mediaconnectflowentitlement.MediaconnectFlowEntitlementTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#key MediaconnectFlowEntitlement#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#value MediaconnectFlowEntitlement#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#key MediaconnectFlowEntitlement#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mediaconnect_flow_entitlement#value MediaconnectFlowEntitlement#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowEntitlementEncryptionOutputReference <a name="MediaconnectFlowEntitlementEncryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowentitlement"

mediaconnectflowentitlement.NewMediaconnectFlowEntitlementEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectFlowEntitlementEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetConstantInitializationVector">ResetConstantInitializationVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetDeviceId">ResetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetConstantInitializationVector` <a name="ResetConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetConstantInitializationVector"></a>

```go
func ResetConstantInitializationVector()
```

##### `ResetDeviceId` <a name="ResetDeviceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetDeviceId"></a>

```go
func ResetDeviceId()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetKeyType"></a>

```go
func ResetKeyType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVectorInput">ConstantInitializationVectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceIdInput">DeviceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceId">DeviceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyType">KeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `ConstantInitializationVectorInput`<sup>Optional</sup> <a name="ConstantInitializationVectorInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVectorInput"></a>

```go
func ConstantInitializationVectorInput() *string
```

- *Type:* *string

---

##### `DeviceIdInput`<sup>Optional</sup> <a name="DeviceIdInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceIdInput"></a>

```go
func DeviceIdInput() *string
```

- *Type:* *string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyTypeInput"></a>

```go
func KeyTypeInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `ConstantInitializationVector`<sup>Required</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVector"></a>

```go
func ConstantInitializationVector() *string
```

- *Type:* *string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceId"></a>

```go
func DeviceId() *string
```

- *Type:* *string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyType"></a>

```go
func KeyType() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowEntitlementTagsList <a name="MediaconnectFlowEntitlementTagsList" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowentitlement"

mediaconnectflowentitlement.NewMediaconnectFlowEntitlementTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconnectFlowEntitlementTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.get"></a>

```go
func Get(index *f64) MediaconnectFlowEntitlementTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectFlowEntitlementTagsOutputReference <a name="MediaconnectFlowEntitlementTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectflowentitlement"

mediaconnectflowentitlement.NewMediaconnectFlowEntitlementTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconnectFlowEntitlementTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



