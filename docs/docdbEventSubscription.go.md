# `docdbEventSubscription` Submodule <a name="`docdbEventSubscription` Submodule" id="@cdktn/provider-awscc.docdbEventSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbEventSubscription <a name="DocdbEventSubscription" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/docdb_event_subscription awscc_docdb_event_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/docdbeventsubscription"

docdbeventsubscription.NewDocdbEventSubscription(scope Construct, id *string, config DocdbEventSubscriptionConfig) DocdbEventSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig">DocdbEventSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig">DocdbEventSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetEventCategories">ResetEventCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetSourceIds">ResetSourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetSourceType">ResetSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetSubscriptionName">ResetSubscriptionName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEventCategories` <a name="ResetEventCategories" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetEventCategories"></a>

```go
func ResetEventCategories()
```

##### `ResetSourceIds` <a name="ResetSourceIds" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetSourceIds"></a>

```go
func ResetSourceIds()
```

##### `ResetSourceType` <a name="ResetSourceType" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetSourceType"></a>

```go
func ResetSourceType()
```

##### `ResetSubscriptionName` <a name="ResetSubscriptionName" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.resetSubscriptionName"></a>

```go
func ResetSubscriptionName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DocdbEventSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/docdbeventsubscription"

docdbeventsubscription.DocdbEventSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/docdbeventsubscription"

docdbeventsubscription.DocdbEventSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/docdbeventsubscription"

docdbeventsubscription.DocdbEventSubscription_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/docdbeventsubscription"

docdbeventsubscription.DocdbEventSubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DocdbEventSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DocdbEventSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DocdbEventSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/docdb_event_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DocdbEventSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.eventCategoriesInput">EventCategoriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceIdsInput">SourceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.subscriptionNameInput">SubscriptionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.eventCategories">EventCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceIds">SourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.subscriptionName">SubscriptionName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventCategoriesInput`<sup>Optional</sup> <a name="EventCategoriesInput" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.eventCategoriesInput"></a>

```go
func EventCategoriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.snsTopicArnInput"></a>

```go
func SnsTopicArnInput() *string
```

- *Type:* *string

---

##### `SourceIdsInput`<sup>Optional</sup> <a name="SourceIdsInput" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceIdsInput"></a>

```go
func SourceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `SubscriptionNameInput`<sup>Optional</sup> <a name="SubscriptionNameInput" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.subscriptionNameInput"></a>

```go
func SubscriptionNameInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EventCategories`<sup>Required</sup> <a name="EventCategories" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.eventCategories"></a>

```go
func EventCategories() *[]*string
```

- *Type:* *[]*string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.snsTopicArn"></a>

```go
func SnsTopicArn() *string
```

- *Type:* *string

---

##### `SourceIds`<sup>Required</sup> <a name="SourceIds" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceIds"></a>

```go
func SourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `SubscriptionName`<sup>Required</sup> <a name="SubscriptionName" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.subscriptionName"></a>

```go
func SubscriptionName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbEventSubscriptionConfig <a name="DocdbEventSubscriptionConfig" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/docdbeventsubscription"

&docdbeventsubscription.DocdbEventSubscriptionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	SnsTopicArn: *string,
	Enabled: interface{},
	EventCategories: *[]*string,
	SourceIds: *[]*string,
	SourceType: *string,
	SubscriptionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the SNS topic created for event notification. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | A Boolean value; |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.eventCategories">EventCategories</a></code> | <code>*[]*string</code> | A list of event categories for a SourceType that you want to subscribe to. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.sourceIds">SourceIds</a></code> | <code>*[]*string</code> | The list of identifiers of the event sources for which events are returned. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.sourceType">SourceType</a></code> | <code>*string</code> | The type of source that is generating the events. |
| <code><a href="#@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.subscriptionName">SubscriptionName</a></code> | <code>*string</code> | The name of the subscription. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.snsTopicArn"></a>

```go
SnsTopicArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the SNS topic created for event notification.

Amazon SNS creates the ARN when you create a topic and subscribe to it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/docdb_event_subscription#sns_topic_arn DocdbEventSubscription#sns_topic_arn}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

A Boolean value;

set to true to activate the subscription, set to false to create the subscription but not active it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/docdb_event_subscription#enabled DocdbEventSubscription#enabled}

---

##### `EventCategories`<sup>Optional</sup> <a name="EventCategories" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.eventCategories"></a>

```go
EventCategories *[]*string
```

- *Type:* *[]*string

A list of event categories for a SourceType that you want to subscribe to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/docdb_event_subscription#event_categories DocdbEventSubscription#event_categories}

---

##### `SourceIds`<sup>Optional</sup> <a name="SourceIds" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.sourceIds"></a>

```go
SourceIds *[]*string
```

- *Type:* *[]*string

The list of identifiers of the event sources for which events are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/docdb_event_subscription#source_ids DocdbEventSubscription#source_ids}

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

The type of source that is generating the events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/docdb_event_subscription#source_type DocdbEventSubscription#source_type}

---

##### `SubscriptionName`<sup>Optional</sup> <a name="SubscriptionName" id="@cdktn/provider-awscc.docdbEventSubscription.DocdbEventSubscriptionConfig.property.subscriptionName"></a>

```go
SubscriptionName *string
```

- *Type:* *string

The name of the subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/docdb_event_subscription#subscription_name DocdbEventSubscription#subscription_name}

---



