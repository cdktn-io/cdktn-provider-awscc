# `datazoneSubscriptionTarget` Submodule <a name="`datazoneSubscriptionTarget` Submodule" id="@cdktn/provider-awscc.datazoneSubscriptionTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneSubscriptionTarget <a name="DatazoneSubscriptionTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_subscription_target awscc_datazone_subscription_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonesubscriptiontarget"

datazonesubscriptiontarget.NewDatazoneSubscriptionTarget(scope Construct, id *string, config DatazoneSubscriptionTargetConfig) DatazoneSubscriptionTarget
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig">DatazoneSubscriptionTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig">DatazoneSubscriptionTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.putSubscriptionTargetConfig">PutSubscriptionTargetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetManageAccessRole">ResetManageAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetProviderName">ResetProviderName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSubscriptionTargetConfig` <a name="PutSubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.putSubscriptionTargetConfig"></a>

```go
func PutSubscriptionTargetConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.putSubscriptionTargetConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetManageAccessRole` <a name="ResetManageAccessRole" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetManageAccessRole"></a>

```go
func ResetManageAccessRole()
```

##### `ResetProviderName` <a name="ResetProviderName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.resetProviderName"></a>

```go
func ResetProviderName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneSubscriptionTarget resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonesubscriptiontarget"

datazonesubscriptiontarget.DatazoneSubscriptionTarget_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonesubscriptiontarget"

datazonesubscriptiontarget.DatazoneSubscriptionTarget_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonesubscriptiontarget"

datazonesubscriptiontarget.DatazoneSubscriptionTarget_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonesubscriptiontarget"

datazonesubscriptiontarget.DatazoneSubscriptionTarget_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatazoneSubscriptionTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatazoneSubscriptionTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatazoneSubscriptionTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_subscription_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneSubscriptionTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfig">SubscriptionTargetConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList">DatazoneSubscriptionTargetSubscriptionTargetConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetId">SubscriptionTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypesInput">ApplicableAssetTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipalsInput">AuthorizedPrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifierInput">EnvironmentIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRoleInput">ManageAccessRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerNameInput">ProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfigInput">SubscriptionTargetConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypes">ApplicableAssetTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipals">AuthorizedPrincipals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRole">ManageAccessRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `SubscriptionTargetConfig`<sup>Required</sup> <a name="SubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfig"></a>

```go
func SubscriptionTargetConfig() DatazoneSubscriptionTargetSubscriptionTargetConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList">DatazoneSubscriptionTargetSubscriptionTargetConfigList</a>

---

##### `SubscriptionTargetId`<sup>Required</sup> <a name="SubscriptionTargetId" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetId"></a>

```go
func SubscriptionTargetId() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `ApplicableAssetTypesInput`<sup>Optional</sup> <a name="ApplicableAssetTypesInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypesInput"></a>

```go
func ApplicableAssetTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizedPrincipalsInput`<sup>Optional</sup> <a name="AuthorizedPrincipalsInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipalsInput"></a>

```go
func AuthorizedPrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifierInput"></a>

```go
func DomainIdentifierInput() *string
```

- *Type:* *string

---

##### `EnvironmentIdentifierInput`<sup>Optional</sup> <a name="EnvironmentIdentifierInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifierInput"></a>

```go
func EnvironmentIdentifierInput() *string
```

- *Type:* *string

---

##### `ManageAccessRoleInput`<sup>Optional</sup> <a name="ManageAccessRoleInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRoleInput"></a>

```go
func ManageAccessRoleInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderNameInput`<sup>Optional</sup> <a name="ProviderNameInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerNameInput"></a>

```go
func ProviderNameInput() *string
```

- *Type:* *string

---

##### `SubscriptionTargetConfigInput`<sup>Optional</sup> <a name="SubscriptionTargetConfigInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.subscriptionTargetConfigInput"></a>

```go
func SubscriptionTargetConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ApplicableAssetTypes`<sup>Required</sup> <a name="ApplicableAssetTypes" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.applicableAssetTypes"></a>

```go
func ApplicableAssetTypes() *[]*string
```

- *Type:* *[]*string

---

##### `AuthorizedPrincipals`<sup>Required</sup> <a name="AuthorizedPrincipals" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.authorizedPrincipals"></a>

```go
func AuthorizedPrincipals() *[]*string
```

- *Type:* *[]*string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.domainIdentifier"></a>

```go
func DomainIdentifier() *string
```

- *Type:* *string

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.environmentIdentifier"></a>

```go
func EnvironmentIdentifier() *string
```

- *Type:* *string

---

##### `ManageAccessRole`<sup>Required</sup> <a name="ManageAccessRole" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.manageAccessRole"></a>

```go
func ManageAccessRole() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTarget.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneSubscriptionTargetConfig <a name="DatazoneSubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonesubscriptiontarget"

&datazonesubscriptiontarget.DatazoneSubscriptionTargetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicableAssetTypes: *[]*string,
	AuthorizedPrincipals: *[]*string,
	DomainIdentifier: *string,
	EnvironmentIdentifier: *string,
	Name: *string,
	SubscriptionTargetConfig: interface{},
	Type: *string,
	ManageAccessRole: *string,
	ProviderName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.applicableAssetTypes">ApplicableAssetTypes</a></code> | <code>*[]*string</code> | The asset types that can be included in the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.authorizedPrincipals">AuthorizedPrincipals</a></code> | <code>*[]*string</code> | The authorized principals of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | The ID of the Amazon DataZone domain in which subscription target would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>*string</code> | The ID of the environment in which subscription target would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.name">Name</a></code> | <code>*string</code> | The name of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.subscriptionTargetConfig">SubscriptionTargetConfig</a></code> | <code>interface{}</code> | The configuration of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.type">Type</a></code> | <code>*string</code> | The type of the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.manageAccessRole">ManageAccessRole</a></code> | <code>*string</code> | The manage access role that is used to create the subscription target. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.providerName">ProviderName</a></code> | <code>*string</code> | The provider of the subscription target. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicableAssetTypes`<sup>Required</sup> <a name="ApplicableAssetTypes" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.applicableAssetTypes"></a>

```go
ApplicableAssetTypes *[]*string
```

- *Type:* *[]*string

The asset types that can be included in the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_subscription_target#applicable_asset_types DatazoneSubscriptionTarget#applicable_asset_types}

---

##### `AuthorizedPrincipals`<sup>Required</sup> <a name="AuthorizedPrincipals" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.authorizedPrincipals"></a>

```go
AuthorizedPrincipals *[]*string
```

- *Type:* *[]*string

The authorized principals of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_subscription_target#authorized_principals DatazoneSubscriptionTarget#authorized_principals}

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.domainIdentifier"></a>

```go
DomainIdentifier *string
```

- *Type:* *string

The ID of the Amazon DataZone domain in which subscription target would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_subscription_target#domain_identifier DatazoneSubscriptionTarget#domain_identifier}

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.environmentIdentifier"></a>

```go
EnvironmentIdentifier *string
```

- *Type:* *string

The ID of the environment in which subscription target would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_subscription_target#environment_identifier DatazoneSubscriptionTarget#environment_identifier}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_subscription_target#name DatazoneSubscriptionTarget#name}

---

##### `SubscriptionTargetConfig`<sup>Required</sup> <a name="SubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.subscriptionTargetConfig"></a>

```go
SubscriptionTargetConfig interface{}
```

- *Type:* interface{}

The configuration of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_subscription_target#subscription_target_config DatazoneSubscriptionTarget#subscription_target_config}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_subscription_target#type DatazoneSubscriptionTarget#type}

---

##### `ManageAccessRole`<sup>Optional</sup> <a name="ManageAccessRole" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.manageAccessRole"></a>

```go
ManageAccessRole *string
```

- *Type:* *string

The manage access role that is used to create the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_subscription_target#manage_access_role DatazoneSubscriptionTarget#manage_access_role}

---

##### `ProviderName`<sup>Optional</sup> <a name="ProviderName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetConfig.property.providerName"></a>

```go
ProviderName *string
```

- *Type:* *string

The provider of the subscription target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_subscription_target#provider_name DatazoneSubscriptionTarget#provider_name}

---

### DatazoneSubscriptionTargetSubscriptionTargetConfig <a name="DatazoneSubscriptionTargetSubscriptionTargetConfig" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonesubscriptiontarget"

&datazonesubscriptiontarget.DatazoneSubscriptionTargetSubscriptionTargetConfig {
	Content: *string,
	FormName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.content">Content</a></code> | <code>*string</code> | The content of the subscription target configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.formName">FormName</a></code> | <code>*string</code> | The form name included in the subscription target configuration. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

The content of the subscription target configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_subscription_target#content DatazoneSubscriptionTarget#content}

---

##### `FormName`<sup>Required</sup> <a name="FormName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfig.property.formName"></a>

```go
FormName *string
```

- *Type:* *string

The form name included in the subscription target configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_subscription_target#form_name DatazoneSubscriptionTarget#form_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneSubscriptionTargetSubscriptionTargetConfigList <a name="DatazoneSubscriptionTargetSubscriptionTargetConfigList" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonesubscriptiontarget"

datazonesubscriptiontarget.NewDatazoneSubscriptionTargetSubscriptionTargetConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneSubscriptionTargetSubscriptionTargetConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.get"></a>

```go
func Get(index *f64) DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference <a name="DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonesubscriptiontarget"

datazonesubscriptiontarget.NewDatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formNameInput">FormNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formName">FormName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `FormNameInput`<sup>Optional</sup> <a name="FormNameInput" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formNameInput"></a>

```go
func FormNameInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `FormName`<sup>Required</sup> <a name="FormName" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.formName"></a>

```go
func FormName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneSubscriptionTarget.DatazoneSubscriptionTargetSubscriptionTargetConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



