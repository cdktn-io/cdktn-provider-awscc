# `redshiftEventSubscription` Submodule <a name="`redshiftEventSubscription` Submodule" id="@cdktn/provider-awscc.redshiftEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftEventSubscription <a name="RedshiftEventSubscription" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_event_subscription awscc_redshift_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshifteventsubscription"

redshifteventsubscription.NewRedshiftEventSubscription(scope Construct, id *string, config RedshiftEventSubscriptionConfig) RedshiftEventSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig">RedshiftEventSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig">RedshiftEventSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetEventCategories">ResetEventCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSourceIds">ResetSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSourceType">ResetSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEventCategories` <a name="ResetEventCategories" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetEventCategories"></a>

```go
func ResetEventCategories()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSeverity"></a>

```go
func ResetSeverity()
```

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSnsTopicArn"></a>

```go
func ResetSnsTopicArn()
```

##### `ResetSourceIds` <a name="ResetSourceIds" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSourceIds"></a>

```go
func ResetSourceIds()
```

##### `ResetSourceType` <a name="ResetSourceType" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetSourceType"></a>

```go
func ResetSourceType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftEventSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshifteventsubscription"

redshifteventsubscription.RedshiftEventSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshifteventsubscription"

redshifteventsubscription.RedshiftEventSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshifteventsubscription"

redshifteventsubscription.RedshiftEventSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshifteventsubscription"

redshifteventsubscription.RedshiftEventSubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RedshiftEventSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RedshiftEventSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RedshiftEventSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_event_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftEventSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.customerAwsId">CustomerAwsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.custSubscriptionId">CustSubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategoriesList">EventCategoriesList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIdsList">SourceIdsList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.subscriptionCreationTime">SubscriptionCreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList">RedshiftEventSubscriptionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategoriesInput">EventCategoriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIdsInput">SourceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.subscriptionNameInput">SubscriptionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategories">EventCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIds">SourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.subscriptionName">SubscriptionName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomerAwsId`<sup>Required</sup> <a name="CustomerAwsId" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.customerAwsId"></a>

```go
func CustomerAwsId() *string
```

- *Type:* *string

---

##### `CustSubscriptionId`<sup>Required</sup> <a name="CustSubscriptionId" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.custSubscriptionId"></a>

```go
func CustSubscriptionId() *string
```

- *Type:* *string

---

##### `EventCategoriesList`<sup>Required</sup> <a name="EventCategoriesList" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategoriesList"></a>

```go
func EventCategoriesList() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SourceIdsList`<sup>Required</sup> <a name="SourceIdsList" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIdsList"></a>

```go
func SourceIdsList() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubscriptionCreationTime`<sup>Required</sup> <a name="SubscriptionCreationTime" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.subscriptionCreationTime"></a>

```go
func SubscriptionCreationTime() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.tags"></a>

```go
func Tags() RedshiftEventSubscriptionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList">RedshiftEventSubscriptionTagsList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventCategoriesInput`<sup>Optional</sup> <a name="EventCategoriesInput" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategoriesInput"></a>

```go
func EventCategoriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.snsTopicArnInput"></a>

```go
func SnsTopicArnInput() *string
```

- *Type:* *string

---

##### `SourceIdsInput`<sup>Optional</sup> <a name="SourceIdsInput" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIdsInput"></a>

```go
func SourceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `SubscriptionNameInput`<sup>Optional</sup> <a name="SubscriptionNameInput" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.subscriptionNameInput"></a>

```go
func SubscriptionNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EventCategories`<sup>Required</sup> <a name="EventCategories" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.eventCategories"></a>

```go
func EventCategories() *[]*string
```

- *Type:* *[]*string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.snsTopicArn"></a>

```go
func SnsTopicArn() *string
```

- *Type:* *string

---

##### `SourceIds`<sup>Required</sup> <a name="SourceIds" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceIds"></a>

```go
func SourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `SubscriptionName`<sup>Required</sup> <a name="SubscriptionName" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.subscriptionName"></a>

```go
func SubscriptionName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftEventSubscriptionConfig <a name="RedshiftEventSubscriptionConfig" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshifteventsubscription"

&redshifteventsubscription.RedshiftEventSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	SubscriptionName: *string,
	Enabled: interface{},
	EventCategories: *[]*string,
	Severity: *string,
	SnsTopicArn: *string,
	SourceIds: *[]*string,
	SourceType: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.subscriptionName">SubscriptionName</a></code> | <code>*string</code> | The name of the Amazon Redshift event notification subscription. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | A boolean value; |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.eventCategories">EventCategories</a></code> | <code>*[]*string</code> | Specifies the Amazon Redshift event categories to be published by the event notification subscription. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.severity">Severity</a></code> | <code>*string</code> | Specifies the Amazon Redshift event severity to be published by the event notification subscription. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.sourceIds">SourceIds</a></code> | <code>*[]*string</code> | A list of one or more identifiers of Amazon Redshift source objects. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.sourceType">SourceType</a></code> | <code>*string</code> | The type of source that will be generating the events. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SubscriptionName`<sup>Required</sup> <a name="SubscriptionName" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.subscriptionName"></a>

```go
SubscriptionName *string
```

- *Type:* *string

The name of the Amazon Redshift event notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_event_subscription#subscription_name RedshiftEventSubscription#subscription_name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

A boolean value;

set to true to activate the subscription, and set to false to create the subscription but not activate it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_event_subscription#enabled RedshiftEventSubscription#enabled}

---

##### `EventCategories`<sup>Optional</sup> <a name="EventCategories" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.eventCategories"></a>

```go
EventCategories *[]*string
```

- *Type:* *[]*string

Specifies the Amazon Redshift event categories to be published by the event notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_event_subscription#event_categories RedshiftEventSubscription#event_categories}

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

Specifies the Amazon Redshift event severity to be published by the event notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_event_subscription#severity RedshiftEventSubscription#severity}

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.snsTopicArn"></a>

```go
SnsTopicArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_event_subscription#sns_topic_arn RedshiftEventSubscription#sns_topic_arn}

---

##### `SourceIds`<sup>Optional</sup> <a name="SourceIds" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.sourceIds"></a>

```go
SourceIds *[]*string
```

- *Type:* *[]*string

A list of one or more identifiers of Amazon Redshift source objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_event_subscription#source_ids RedshiftEventSubscription#source_ids}

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

The type of source that will be generating the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_event_subscription#source_type RedshiftEventSubscription#source_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_event_subscription#tags RedshiftEventSubscription#tags}

---

### RedshiftEventSubscriptionTags <a name="RedshiftEventSubscriptionTags" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshifteventsubscription"

&redshifteventsubscription.RedshiftEventSubscriptionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_event_subscription#key RedshiftEventSubscription#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/redshift_event_subscription#value RedshiftEventSubscription#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftEventSubscriptionTagsList <a name="RedshiftEventSubscriptionTagsList" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshifteventsubscription"

redshifteventsubscription.NewRedshiftEventSubscriptionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RedshiftEventSubscriptionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.get"></a>

```go
func Get(index *f64) RedshiftEventSubscriptionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RedshiftEventSubscriptionTagsOutputReference <a name="RedshiftEventSubscriptionTagsOutputReference" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/redshifteventsubscription"

redshifteventsubscription.NewRedshiftEventSubscriptionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RedshiftEventSubscriptionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.redshiftEventSubscription.RedshiftEventSubscriptionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



