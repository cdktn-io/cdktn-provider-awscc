# `batchQuotaShare` Submodule <a name="`batchQuotaShare` Submodule" id="@cdktn/provider-awscc.batchQuotaShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchQuotaShare <a name="BatchQuotaShare" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share awscc_batch_quota_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchquotashare"

batchquotashare.NewBatchQuotaShare(scope Construct, id *string, config BatchQuotaShareConfig) BatchQuotaShare
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig">BatchQuotaShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig">BatchQuotaShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putCapacityLimits">PutCapacityLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putPreemptionConfiguration">PutPreemptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putResourceSharingConfiguration">PutResourceSharingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapacityLimits` <a name="PutCapacityLimits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putCapacityLimits"></a>

```go
func PutCapacityLimits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putCapacityLimits.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPreemptionConfiguration` <a name="PutPreemptionConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putPreemptionConfiguration"></a>

```go
func PutPreemptionConfiguration(value BatchQuotaSharePreemptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putPreemptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a>

---

##### `PutResourceSharingConfiguration` <a name="PutResourceSharingConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putResourceSharingConfiguration"></a>

```go
func PutResourceSharingConfiguration(value BatchQuotaShareResourceSharingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.putResourceSharingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a>

---

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetState"></a>

```go
func ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BatchQuotaShare resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchquotashare"

batchquotashare.BatchQuotaShare_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchquotashare"

batchquotashare.BatchQuotaShare_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchquotashare"

batchquotashare.BatchQuotaShare_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchquotashare"

batchquotashare.BatchQuotaShare_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BatchQuotaShare resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BatchQuotaShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BatchQuotaShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BatchQuotaShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimits">CapacityLimits</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList">BatchQuotaShareCapacityLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfiguration">PreemptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference">BatchQuotaSharePreemptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareArn">QuotaShareArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfiguration">ResourceSharingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference">BatchQuotaShareResourceSharingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimitsInput">CapacityLimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueueInput">JobQueueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfigurationInput">PreemptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareNameInput">QuotaShareNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfigurationInput">ResourceSharingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueue">JobQueue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareName">QuotaShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityLimits`<sup>Required</sup> <a name="CapacityLimits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimits"></a>

```go
func CapacityLimits() BatchQuotaShareCapacityLimitsList
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList">BatchQuotaShareCapacityLimitsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PreemptionConfiguration`<sup>Required</sup> <a name="PreemptionConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfiguration"></a>

```go
func PreemptionConfiguration() BatchQuotaSharePreemptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference">BatchQuotaSharePreemptionConfigurationOutputReference</a>

---

##### `QuotaShareArn`<sup>Required</sup> <a name="QuotaShareArn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareArn"></a>

```go
func QuotaShareArn() *string
```

- *Type:* *string

---

##### `ResourceSharingConfiguration`<sup>Required</sup> <a name="ResourceSharingConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfiguration"></a>

```go
func ResourceSharingConfiguration() BatchQuotaShareResourceSharingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference">BatchQuotaShareResourceSharingConfigurationOutputReference</a>

---

##### `CapacityLimitsInput`<sup>Optional</sup> <a name="CapacityLimitsInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.capacityLimitsInput"></a>

```go
func CapacityLimitsInput() interface{}
```

- *Type:* interface{}

---

##### `JobQueueInput`<sup>Optional</sup> <a name="JobQueueInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueueInput"></a>

```go
func JobQueueInput() *string
```

- *Type:* *string

---

##### `PreemptionConfigurationInput`<sup>Optional</sup> <a name="PreemptionConfigurationInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.preemptionConfigurationInput"></a>

```go
func PreemptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `QuotaShareNameInput`<sup>Optional</sup> <a name="QuotaShareNameInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareNameInput"></a>

```go
func QuotaShareNameInput() *string
```

- *Type:* *string

---

##### `ResourceSharingConfigurationInput`<sup>Optional</sup> <a name="ResourceSharingConfigurationInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.resourceSharingConfigurationInput"></a>

```go
func ResourceSharingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `JobQueue`<sup>Required</sup> <a name="JobQueue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.jobQueue"></a>

```go
func JobQueue() *string
```

- *Type:* *string

---

##### `QuotaShareName`<sup>Required</sup> <a name="QuotaShareName" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.quotaShareName"></a>

```go
func QuotaShareName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShare.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchQuotaShareCapacityLimits <a name="BatchQuotaShareCapacityLimits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchquotashare"

&batchquotashare.BatchQuotaShareCapacityLimits {
	CapacityUnit: *string,
	MaxCapacity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.capacityUnit">CapacityUnit</a></code> | <code>*string</code> | The unit of compute capacity for the capacityLimit. For example, `ml.m5.large`. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | The maximum capacity available for the quota share. |

---

##### `CapacityUnit`<sup>Required</sup> <a name="CapacityUnit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.capacityUnit"></a>

```go
CapacityUnit *string
```

- *Type:* *string

The unit of compute capacity for the capacityLimit. For example, `ml.m5.large`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#capacity_unit BatchQuotaShare#capacity_unit}

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimits.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

The maximum capacity available for the quota share.

This value represents the maximum quantity of a resource that can be allocated to jobs in the quota share without borrowing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#max_capacity BatchQuotaShare#max_capacity}

---

### BatchQuotaShareConfig <a name="BatchQuotaShareConfig" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchquotashare"

&batchquotashare.BatchQuotaShareConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CapacityLimits: interface{},
	JobQueue: *string,
	PreemptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration,
	QuotaShareName: *string,
	ResourceSharingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration,
	State: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.capacityLimits">CapacityLimits</a></code> | <code>interface{}</code> | A list that specifies the quantity and type of compute capacity allocated to the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.jobQueue">JobQueue</a></code> | <code>*string</code> | The AWS Batch job queue associated with the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.preemptionConfiguration">PreemptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a></code> | Specifies the preemption behavior for jobs in a quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.quotaShareName">QuotaShareName</a></code> | <code>*string</code> | The name of the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.resourceSharingConfiguration">ResourceSharingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a></code> | Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.state">State</a></code> | <code>*string</code> | The state of the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | The tags that you apply to the quota share to help you categorize and organize your resources. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityLimits`<sup>Required</sup> <a name="CapacityLimits" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.capacityLimits"></a>

```go
CapacityLimits interface{}
```

- *Type:* interface{}

A list that specifies the quantity and type of compute capacity allocated to the quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#capacity_limits BatchQuotaShare#capacity_limits}

---

##### `JobQueue`<sup>Required</sup> <a name="JobQueue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.jobQueue"></a>

```go
JobQueue *string
```

- *Type:* *string

The AWS Batch job queue associated with the quota share.

This can be the job queue name or ARN. A job queue must be in the `VALID` state before you can associate it with a quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#job_queue BatchQuotaShare#job_queue}

---

##### `PreemptionConfiguration`<sup>Required</sup> <a name="PreemptionConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.preemptionConfiguration"></a>

```go
PreemptionConfiguration BatchQuotaSharePreemptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration">BatchQuotaSharePreemptionConfiguration</a>

Specifies the preemption behavior for jobs in a quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#preemption_configuration BatchQuotaShare#preemption_configuration}

---

##### `QuotaShareName`<sup>Required</sup> <a name="QuotaShareName" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.quotaShareName"></a>

```go
QuotaShareName *string
```

- *Type:* *string

The name of the quota share.

It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#quota_share_name BatchQuotaShare#quota_share_name}

---

##### `ResourceSharingConfiguration`<sup>Required</sup> <a name="ResourceSharingConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.resourceSharingConfiguration"></a>

```go
ResourceSharingConfiguration BatchQuotaShareResourceSharingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration">BatchQuotaShareResourceSharingConfiguration</a>

Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#resource_sharing_configuration BatchQuotaShare#resource_sharing_configuration}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

The state of the quota share.

If the quota share is `ENABLED`, it is able to accept jobs. If the quota share is `DISABLED`, new jobs won't be accepted but jobs already submitted can finish. The default state is `ENABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#state BatchQuotaShare#state}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

The tags that you apply to the quota share to help you categorize and organize your resources.

Each tag consists of a key and an optional value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#tags BatchQuotaShare#tags}

---

### BatchQuotaSharePreemptionConfiguration <a name="BatchQuotaSharePreemptionConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchquotashare"

&batchquotashare.BatchQuotaSharePreemptionConfiguration {
	InSharePreemption: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration.property.inSharePreemption">InSharePreemption</a></code> | <code>*string</code> | Specifies whether jobs within a quota share can be preempted by another, higher priority job in the same quota share. |

---

##### `InSharePreemption`<sup>Required</sup> <a name="InSharePreemption" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfiguration.property.inSharePreemption"></a>

```go
InSharePreemption *string
```

- *Type:* *string

Specifies whether jobs within a quota share can be preempted by another, higher priority job in the same quota share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#in_share_preemption BatchQuotaShare#in_share_preemption}

---

### BatchQuotaShareResourceSharingConfiguration <a name="BatchQuotaShareResourceSharingConfiguration" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchquotashare"

&batchquotashare.BatchQuotaShareResourceSharingConfiguration {
	Strategy: *string,
	BorrowLimit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.strategy">Strategy</a></code> | <code>*string</code> | The resource sharing strategy for the quota share. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.borrowLimit">BorrowLimit</a></code> | <code>*f64</code> | The maximum percentage of additional capacity that the quota share can borrow from other shares. |

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.strategy"></a>

```go
Strategy *string
```

- *Type:* *string

The resource sharing strategy for the quota share.

The `RESERVE` strategy allows a quota share to reserve idle capacity for itself. `LEND` configures the share to lend its idle capacity to another share in need of capacity. The `LEND_AND_BORROW` strategy configures the share to borrow idle capacity from an underutilized share, as well as lend to another share.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#strategy BatchQuotaShare#strategy}

---

##### `BorrowLimit`<sup>Optional</sup> <a name="BorrowLimit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfiguration.property.borrowLimit"></a>

```go
BorrowLimit *f64
```

- *Type:* *f64

The maximum percentage of additional capacity that the quota share can borrow from other shares.

`BorrowLimit` can only be applied to quota shares with a strategy of `LEND_AND_BORROW`. This value is expressed as a percentage of the quota share's configured CapacityLimits. The `BorrowLimit` is applied uniformly across all capacity units. For example, if the `BorrowLimit` is 200, the quota share can borrow up to 200% of its configured `maxCapacity` for each capacity unit. The default `BorrowLimit` is -1, which indicates unlimited borrowing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/batch_quota_share#borrow_limit BatchQuotaShare#borrow_limit}

---

## Classes <a name="Classes" id="Classes"></a>

### BatchQuotaShareCapacityLimitsList <a name="BatchQuotaShareCapacityLimitsList" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchquotashare"

batchquotashare.NewBatchQuotaShareCapacityLimitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BatchQuotaShareCapacityLimitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.get"></a>

```go
func Get(index *f64) BatchQuotaShareCapacityLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BatchQuotaShareCapacityLimitsOutputReference <a name="BatchQuotaShareCapacityLimitsOutputReference" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchquotashare"

batchquotashare.NewBatchQuotaShareCapacityLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BatchQuotaShareCapacityLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnitInput">CapacityUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnit">CapacityUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityUnitInput`<sup>Optional</sup> <a name="CapacityUnitInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnitInput"></a>

```go
func CapacityUnitInput() *string
```

- *Type:* *string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `CapacityUnit`<sup>Required</sup> <a name="CapacityUnit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.capacityUnit"></a>

```go
func CapacityUnit() *string
```

- *Type:* *string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareCapacityLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BatchQuotaSharePreemptionConfigurationOutputReference <a name="BatchQuotaSharePreemptionConfigurationOutputReference" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchquotashare"

batchquotashare.NewBatchQuotaSharePreemptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BatchQuotaSharePreemptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemptionInput">InSharePreemptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemption">InSharePreemption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InSharePreemptionInput`<sup>Optional</sup> <a name="InSharePreemptionInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemptionInput"></a>

```go
func InSharePreemptionInput() *string
```

- *Type:* *string

---

##### `InSharePreemption`<sup>Required</sup> <a name="InSharePreemption" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.inSharePreemption"></a>

```go
func InSharePreemption() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaSharePreemptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BatchQuotaShareResourceSharingConfigurationOutputReference <a name="BatchQuotaShareResourceSharingConfigurationOutputReference" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/batchquotashare"

batchquotashare.NewBatchQuotaShareResourceSharingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BatchQuotaShareResourceSharingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resetBorrowLimit">ResetBorrowLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBorrowLimit` <a name="ResetBorrowLimit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.resetBorrowLimit"></a>

```go
func ResetBorrowLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimitInput">BorrowLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategyInput">StrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimit">BorrowLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategy">Strategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BorrowLimitInput`<sup>Optional</sup> <a name="BorrowLimitInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimitInput"></a>

```go
func BorrowLimitInput() *f64
```

- *Type:* *f64

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategyInput"></a>

```go
func StrategyInput() *string
```

- *Type:* *string

---

##### `BorrowLimit`<sup>Required</sup> <a name="BorrowLimit" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.borrowLimit"></a>

```go
func BorrowLimit() *f64
```

- *Type:* *f64

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.strategy"></a>

```go
func Strategy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchQuotaShare.BatchQuotaShareResourceSharingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



