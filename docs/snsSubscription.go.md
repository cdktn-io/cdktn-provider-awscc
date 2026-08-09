# `snsSubscription` Submodule <a name="`snsSubscription` Submodule" id="@cdktn/provider-awscc.snsSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsSubscription <a name="SnsSubscription" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription awscc_sns_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snssubscription"

snssubscription.NewSnsSubscription(scope Construct, id *string, config SnsSubscriptionConfig) SnsSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig">SnsSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig">SnsSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetDeliveryPolicy">ResetDeliveryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicy">ResetFilterPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicyScope">ResetFilterPolicyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRawMessageDelivery">ResetRawMessageDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRedrivePolicy">ResetRedrivePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetReplayPolicy">ResetReplayPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetSubscriptionRoleArn">ResetSubscriptionRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDeliveryPolicy` <a name="ResetDeliveryPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetDeliveryPolicy"></a>

```go
func ResetDeliveryPolicy()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetFilterPolicy` <a name="ResetFilterPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicy"></a>

```go
func ResetFilterPolicy()
```

##### `ResetFilterPolicyScope` <a name="ResetFilterPolicyScope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetFilterPolicyScope"></a>

```go
func ResetFilterPolicyScope()
```

##### `ResetRawMessageDelivery` <a name="ResetRawMessageDelivery" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRawMessageDelivery"></a>

```go
func ResetRawMessageDelivery()
```

##### `ResetRedrivePolicy` <a name="ResetRedrivePolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRedrivePolicy"></a>

```go
func ResetRedrivePolicy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetReplayPolicy` <a name="ResetReplayPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetReplayPolicy"></a>

```go
func ResetReplayPolicy()
```

##### `ResetSubscriptionRoleArn` <a name="ResetSubscriptionRoleArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.resetSubscriptionRoleArn"></a>

```go
func ResetSubscriptionRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SnsSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snssubscription"

snssubscription.SnsSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snssubscription"

snssubscription.SnsSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snssubscription"

snssubscription.SnsSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snssubscription"

snssubscription.SnsSubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SnsSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SnsSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SnsSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SnsSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicyInput">DeliveryPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyInput">FilterPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScopeInput">FilterPolicyScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDeliveryInput">RawMessageDeliveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicyInput">RedrivePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicyInput">ReplayPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArnInput">SubscriptionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArnInput">TopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicy">DeliveryPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicy">FilterPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScope">FilterPolicyScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDelivery">RawMessageDelivery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicy">RedrivePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicy">ReplayPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArn">SubscriptionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArn">TopicArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DeliveryPolicyInput`<sup>Optional</sup> <a name="DeliveryPolicyInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicyInput"></a>

```go
func DeliveryPolicyInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `FilterPolicyInput`<sup>Optional</sup> <a name="FilterPolicyInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyInput"></a>

```go
func FilterPolicyInput() *string
```

- *Type:* *string

---

##### `FilterPolicyScopeInput`<sup>Optional</sup> <a name="FilterPolicyScopeInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScopeInput"></a>

```go
func FilterPolicyScopeInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RawMessageDeliveryInput`<sup>Optional</sup> <a name="RawMessageDeliveryInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDeliveryInput"></a>

```go
func RawMessageDeliveryInput() interface{}
```

- *Type:* interface{}

---

##### `RedrivePolicyInput`<sup>Optional</sup> <a name="RedrivePolicyInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicyInput"></a>

```go
func RedrivePolicyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ReplayPolicyInput`<sup>Optional</sup> <a name="ReplayPolicyInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicyInput"></a>

```go
func ReplayPolicyInput() *string
```

- *Type:* *string

---

##### `SubscriptionRoleArnInput`<sup>Optional</sup> <a name="SubscriptionRoleArnInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArnInput"></a>

```go
func SubscriptionRoleArnInput() *string
```

- *Type:* *string

---

##### `TopicArnInput`<sup>Optional</sup> <a name="TopicArnInput" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArnInput"></a>

```go
func TopicArnInput() *string
```

- *Type:* *string

---

##### `DeliveryPolicy`<sup>Required</sup> <a name="DeliveryPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.deliveryPolicy"></a>

```go
func DeliveryPolicy() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `FilterPolicy`<sup>Required</sup> <a name="FilterPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicy"></a>

```go
func FilterPolicy() *string
```

- *Type:* *string

---

##### `FilterPolicyScope`<sup>Required</sup> <a name="FilterPolicyScope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.filterPolicyScope"></a>

```go
func FilterPolicyScope() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RawMessageDelivery`<sup>Required</sup> <a name="RawMessageDelivery" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.rawMessageDelivery"></a>

```go
func RawMessageDelivery() interface{}
```

- *Type:* interface{}

---

##### `RedrivePolicy`<sup>Required</sup> <a name="RedrivePolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.redrivePolicy"></a>

```go
func RedrivePolicy() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReplayPolicy`<sup>Required</sup> <a name="ReplayPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.replayPolicy"></a>

```go
func ReplayPolicy() *string
```

- *Type:* *string

---

##### `SubscriptionRoleArn`<sup>Required</sup> <a name="SubscriptionRoleArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.subscriptionRoleArn"></a>

```go
func SubscriptionRoleArn() *string
```

- *Type:* *string

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.topicArn"></a>

```go
func TopicArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.snsSubscription.SnsSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SnsSubscriptionConfig <a name="SnsSubscriptionConfig" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/snssubscription"

&snssubscription.SnsSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Protocol: *string,
	TopicArn: *string,
	DeliveryPolicy: *string,
	Endpoint: *string,
	FilterPolicy: *string,
	FilterPolicyScope: *string,
	RawMessageDelivery: interface{},
	RedrivePolicy: *string,
	Region: *string,
	ReplayPolicy: *string,
	SubscriptionRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.protocol">Protocol</a></code> | <code>*string</code> | The subscription's protocol. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.topicArn">TopicArn</a></code> | <code>*string</code> | The ARN of the topic to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.deliveryPolicy">DeliveryPolicy</a></code> | <code>*string</code> | The delivery policy JSON assigned to the subscription. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | The subscription's endpoint. The endpoint value depends on the protocol that you specify. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicy">FilterPolicy</a></code> | <code>*string</code> | The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicyScope">FilterPolicyScope</a></code> | <code>*string</code> | This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.rawMessageDelivery">RawMessageDelivery</a></code> | <code>interface{}</code> | When set to true, enables raw message delivery. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.redrivePolicy">RedrivePolicy</a></code> | <code>*string</code> | When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.region">Region</a></code> | <code>*string</code> | For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.replayPolicy">ReplayPolicy</a></code> | <code>*string</code> | Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes. |
| <code><a href="#@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.subscriptionRoleArn">SubscriptionRoleArn</a></code> | <code>*string</code> | This property applies only to Amazon Data Firehose delivery stream subscriptions. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The subscription's protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#protocol SnsSubscription#protocol}

---

##### `TopicArn`<sup>Required</sup> <a name="TopicArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.topicArn"></a>

```go
TopicArn *string
```

- *Type:* *string

The ARN of the topic to subscribe to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#topic_arn SnsSubscription#topic_arn}

---

##### `DeliveryPolicy`<sup>Optional</sup> <a name="DeliveryPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.deliveryPolicy"></a>

```go
DeliveryPolicy *string
```

- *Type:* *string

The delivery policy JSON assigned to the subscription.

Enables the subscriber to define the message delivery retry strategy in the case of an HTTP/S endpoint subscribed to the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#delivery_policy SnsSubscription#delivery_policy}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

The subscription's endpoint. The endpoint value depends on the protocol that you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#endpoint SnsSubscription#endpoint}

---

##### `FilterPolicy`<sup>Optional</sup> <a name="FilterPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicy"></a>

```go
FilterPolicy *string
```

- *Type:* *string

The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#filter_policy SnsSubscription#filter_policy}

---

##### `FilterPolicyScope`<sup>Optional</sup> <a name="FilterPolicyScope" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.filterPolicyScope"></a>

```go
FilterPolicyScope *string
```

- *Type:* *string

This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#filter_policy_scope SnsSubscription#filter_policy_scope}

---

##### `RawMessageDelivery`<sup>Optional</sup> <a name="RawMessageDelivery" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.rawMessageDelivery"></a>

```go
RawMessageDelivery interface{}
```

- *Type:* interface{}

When set to true, enables raw message delivery.

Raw messages don't contain any JSON formatting and can be sent to Amazon SQS and HTTP/S endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#raw_message_delivery SnsSubscription#raw_message_delivery}

---

##### `RedrivePolicy`<sup>Optional</sup> <a name="RedrivePolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.redrivePolicy"></a>

```go
RedrivePolicy *string
```

- *Type:* *string

When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue.

Messages that can't be delivered due to client errors are held in the dead-letter queue for further analysis or reprocessing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#redrive_policy SnsSubscription#redrive_policy}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#region SnsSubscription#region}

---

##### `ReplayPolicy`<sup>Optional</sup> <a name="ReplayPolicy" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.replayPolicy"></a>

```go
ReplayPolicy *string
```

- *Type:* *string

Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#replay_policy SnsSubscription#replay_policy}

---

##### `SubscriptionRoleArn`<sup>Optional</sup> <a name="SubscriptionRoleArn" id="@cdktn/provider-awscc.snsSubscription.SnsSubscriptionConfig.property.subscriptionRoleArn"></a>

```go
SubscriptionRoleArn *string
```

- *Type:* *string

This property applies only to Amazon Data Firehose delivery stream subscriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/sns_subscription#subscription_role_arn SnsSubscription#subscription_role_arn}

---



