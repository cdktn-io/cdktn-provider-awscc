# `cloudfrontMonitoringSubscription` Submodule <a name="`cloudfrontMonitoringSubscription` Submodule" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontMonitoringSubscription <a name="CloudfrontMonitoringSubscription" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_monitoring_subscription awscc_cloudfront_monitoring_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontmonitoringsubscription"

cloudfrontmonitoringsubscription.NewCloudfrontMonitoringSubscription(scope Construct, id *string, config CloudfrontMonitoringSubscriptionConfig) CloudfrontMonitoringSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig">CloudfrontMonitoringSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig">CloudfrontMonitoringSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.putMonitoringSubscription">PutMonitoringSubscription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMonitoringSubscription` <a name="PutMonitoringSubscription" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.putMonitoringSubscription"></a>

```go
func PutMonitoringSubscription(value CloudfrontMonitoringSubscriptionMonitoringSubscription)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.putMonitoringSubscription.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription">CloudfrontMonitoringSubscriptionMonitoringSubscription</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontMonitoringSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontmonitoringsubscription"

cloudfrontmonitoringsubscription.CloudfrontMonitoringSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontmonitoringsubscription"

cloudfrontmonitoringsubscription.CloudfrontMonitoringSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontmonitoringsubscription"

cloudfrontmonitoringsubscription.CloudfrontMonitoringSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontmonitoringsubscription"

cloudfrontmonitoringsubscription.CloudfrontMonitoringSubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudfrontMonitoringSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudfrontMonitoringSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudfrontMonitoringSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_monitoring_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontMonitoringSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.monitoringSubscription">MonitoringSubscription</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference">CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.distributionIdInput">DistributionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.monitoringSubscriptionInput">MonitoringSubscriptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.distributionId">DistributionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MonitoringSubscription`<sup>Required</sup> <a name="MonitoringSubscription" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.monitoringSubscription"></a>

```go
func MonitoringSubscription() CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference">CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference</a>

---

##### `DistributionIdInput`<sup>Optional</sup> <a name="DistributionIdInput" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.distributionIdInput"></a>

```go
func DistributionIdInput() *string
```

- *Type:* *string

---

##### `MonitoringSubscriptionInput`<sup>Optional</sup> <a name="MonitoringSubscriptionInput" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.monitoringSubscriptionInput"></a>

```go
func MonitoringSubscriptionInput() interface{}
```

- *Type:* interface{}

---

##### `DistributionId`<sup>Required</sup> <a name="DistributionId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.distributionId"></a>

```go
func DistributionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontMonitoringSubscriptionConfig <a name="CloudfrontMonitoringSubscriptionConfig" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontmonitoringsubscription"

&cloudfrontmonitoringsubscription.CloudfrontMonitoringSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DistributionId: *string,
	MonitoringSubscription: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.distributionId">DistributionId</a></code> | <code>*string</code> | The ID of the distribution that you are enabling metrics for. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.monitoringSubscription">MonitoringSubscription</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription">CloudfrontMonitoringSubscriptionMonitoringSubscription</a></code> | A subscription configuration for additional CloudWatch metrics. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DistributionId`<sup>Required</sup> <a name="DistributionId" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.distributionId"></a>

```go
DistributionId *string
```

- *Type:* *string

The ID of the distribution that you are enabling metrics for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_monitoring_subscription#distribution_id CloudfrontMonitoringSubscription#distribution_id}

---

##### `MonitoringSubscription`<sup>Required</sup> <a name="MonitoringSubscription" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionConfig.property.monitoringSubscription"></a>

```go
MonitoringSubscription CloudfrontMonitoringSubscriptionMonitoringSubscription
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription">CloudfrontMonitoringSubscriptionMonitoringSubscription</a>

A subscription configuration for additional CloudWatch metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_monitoring_subscription#monitoring_subscription CloudfrontMonitoringSubscription#monitoring_subscription}

---

### CloudfrontMonitoringSubscriptionMonitoringSubscription <a name="CloudfrontMonitoringSubscriptionMonitoringSubscription" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontmonitoringsubscription"

&cloudfrontmonitoringsubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription {
	RealtimeMetricsSubscriptionConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription.property.realtimeMetricsSubscriptionConfig">RealtimeMetricsSubscriptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig">CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig</a></code> | A subscription configuration for additional CloudWatch metrics. |

---

##### `RealtimeMetricsSubscriptionConfig`<sup>Optional</sup> <a name="RealtimeMetricsSubscriptionConfig" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscription.property.realtimeMetricsSubscriptionConfig"></a>

```go
RealtimeMetricsSubscriptionConfig CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig">CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig</a>

A subscription configuration for additional CloudWatch metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_monitoring_subscription#realtime_metrics_subscription_config CloudfrontMonitoringSubscription#realtime_metrics_subscription_config}

---

### CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig <a name="CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontmonitoringsubscription"

&cloudfrontmonitoringsubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig {
	RealtimeMetricsSubscriptionStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig.property.realtimeMetricsSubscriptionStatus">RealtimeMetricsSubscriptionStatus</a></code> | <code>*string</code> | A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution. |

---

##### `RealtimeMetricsSubscriptionStatus`<sup>Optional</sup> <a name="RealtimeMetricsSubscriptionStatus" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig.property.realtimeMetricsSubscriptionStatus"></a>

```go
RealtimeMetricsSubscriptionStatus *string
```

- *Type:* *string

A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cloudfront_monitoring_subscription#realtime_metrics_subscription_status CloudfrontMonitoringSubscription#realtime_metrics_subscription_status}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference <a name="CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontmonitoringsubscription"

cloudfrontmonitoringsubscription.NewCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.putRealtimeMetricsSubscriptionConfig">PutRealtimeMetricsSubscriptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.resetRealtimeMetricsSubscriptionConfig">ResetRealtimeMetricsSubscriptionConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRealtimeMetricsSubscriptionConfig` <a name="PutRealtimeMetricsSubscriptionConfig" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.putRealtimeMetricsSubscriptionConfig"></a>

```go
func PutRealtimeMetricsSubscriptionConfig(value CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.putRealtimeMetricsSubscriptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig">CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig</a>

---

##### `ResetRealtimeMetricsSubscriptionConfig` <a name="ResetRealtimeMetricsSubscriptionConfig" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.resetRealtimeMetricsSubscriptionConfig"></a>

```go
func ResetRealtimeMetricsSubscriptionConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.realtimeMetricsSubscriptionConfig">RealtimeMetricsSubscriptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference">CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.realtimeMetricsSubscriptionConfigInput">RealtimeMetricsSubscriptionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RealtimeMetricsSubscriptionConfig`<sup>Required</sup> <a name="RealtimeMetricsSubscriptionConfig" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.realtimeMetricsSubscriptionConfig"></a>

```go
func RealtimeMetricsSubscriptionConfig() CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference">CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference</a>

---

##### `RealtimeMetricsSubscriptionConfigInput`<sup>Optional</sup> <a name="RealtimeMetricsSubscriptionConfigInput" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.realtimeMetricsSubscriptionConfigInput"></a>

```go
func RealtimeMetricsSubscriptionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference <a name="CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cloudfrontmonitoringsubscription"

cloudfrontmonitoringsubscription.NewCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.resetRealtimeMetricsSubscriptionStatus">ResetRealtimeMetricsSubscriptionStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRealtimeMetricsSubscriptionStatus` <a name="ResetRealtimeMetricsSubscriptionStatus" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.resetRealtimeMetricsSubscriptionStatus"></a>

```go
func ResetRealtimeMetricsSubscriptionStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.realtimeMetricsSubscriptionStatusInput">RealtimeMetricsSubscriptionStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.realtimeMetricsSubscriptionStatus">RealtimeMetricsSubscriptionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RealtimeMetricsSubscriptionStatusInput`<sup>Optional</sup> <a name="RealtimeMetricsSubscriptionStatusInput" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.realtimeMetricsSubscriptionStatusInput"></a>

```go
func RealtimeMetricsSubscriptionStatusInput() *string
```

- *Type:* *string

---

##### `RealtimeMetricsSubscriptionStatus`<sup>Required</sup> <a name="RealtimeMetricsSubscriptionStatus" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.realtimeMetricsSubscriptionStatus"></a>

```go
func RealtimeMetricsSubscriptionStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudfrontMonitoringSubscription.CloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



