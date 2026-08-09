# `transferAgreement` Submodule <a name="`transferAgreement` Submodule" id="@cdktn/provider-awscc.transferAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferAgreement <a name="TransferAgreement" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement awscc_transfer_agreement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transferagreement"

transferagreement.NewTransferAgreement(scope Construct, id *string, config TransferAgreementConfig) TransferAgreement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig">TransferAgreementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig">TransferAgreementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories">PutCustomDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetBaseDirectory">ResetBaseDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetCustomDirectories">ResetCustomDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetEnforceMessageSigning">ResetEnforceMessageSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetPreserveFilename">ResetPreserveFilename</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomDirectories` <a name="PutCustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories"></a>

```go
func PutCustomDirectories(value TransferAgreementCustomDirectories)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBaseDirectory` <a name="ResetBaseDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetBaseDirectory"></a>

```go
func ResetBaseDirectory()
```

##### `ResetCustomDirectories` <a name="ResetCustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetCustomDirectories"></a>

```go
func ResetCustomDirectories()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnforceMessageSigning` <a name="ResetEnforceMessageSigning" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetEnforceMessageSigning"></a>

```go
func ResetEnforceMessageSigning()
```

##### `ResetPreserveFilename` <a name="ResetPreserveFilename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetPreserveFilename"></a>

```go
func ResetPreserveFilename()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TransferAgreement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transferagreement"

transferagreement.TransferAgreement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transferagreement"

transferagreement.TransferAgreement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transferagreement"

transferagreement.TransferAgreement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transferagreement"

transferagreement.TransferAgreement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TransferAgreement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TransferAgreement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TransferAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TransferAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.agreementId">AgreementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectories">CustomDirectories</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference">TransferAgreementCustomDirectoriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList">TransferAgreementTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRoleInput">AccessRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectoryInput">BaseDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectoriesInput">CustomDirectoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigningInput">EnforceMessageSigningInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileIdInput">LocalProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileIdInput">PartnerProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilenameInput">PreserveFilenameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverIdInput">ServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRole">AccessRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectory">BaseDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigning">EnforceMessageSigning</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileId">LocalProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileId">PartnerProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilename">PreserveFilename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverId">ServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgreementId`<sup>Required</sup> <a name="AgreementId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.agreementId"></a>

```go
func AgreementId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CustomDirectories`<sup>Required</sup> <a name="CustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectories"></a>

```go
func CustomDirectories() TransferAgreementCustomDirectoriesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference">TransferAgreementCustomDirectoriesOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tags"></a>

```go
func Tags() TransferAgreementTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList">TransferAgreementTagsList</a>

---

##### `AccessRoleInput`<sup>Optional</sup> <a name="AccessRoleInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRoleInput"></a>

```go
func AccessRoleInput() *string
```

- *Type:* *string

---

##### `BaseDirectoryInput`<sup>Optional</sup> <a name="BaseDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectoryInput"></a>

```go
func BaseDirectoryInput() *string
```

- *Type:* *string

---

##### `CustomDirectoriesInput`<sup>Optional</sup> <a name="CustomDirectoriesInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectoriesInput"></a>

```go
func CustomDirectoriesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnforceMessageSigningInput`<sup>Optional</sup> <a name="EnforceMessageSigningInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigningInput"></a>

```go
func EnforceMessageSigningInput() *string
```

- *Type:* *string

---

##### `LocalProfileIdInput`<sup>Optional</sup> <a name="LocalProfileIdInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileIdInput"></a>

```go
func LocalProfileIdInput() *string
```

- *Type:* *string

---

##### `PartnerProfileIdInput`<sup>Optional</sup> <a name="PartnerProfileIdInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileIdInput"></a>

```go
func PartnerProfileIdInput() *string
```

- *Type:* *string

---

##### `PreserveFilenameInput`<sup>Optional</sup> <a name="PreserveFilenameInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilenameInput"></a>

```go
func PreserveFilenameInput() *string
```

- *Type:* *string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverIdInput"></a>

```go
func ServerIdInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessRole`<sup>Required</sup> <a name="AccessRole" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRole"></a>

```go
func AccessRole() *string
```

- *Type:* *string

---

##### `BaseDirectory`<sup>Required</sup> <a name="BaseDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectory"></a>

```go
func BaseDirectory() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnforceMessageSigning`<sup>Required</sup> <a name="EnforceMessageSigning" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigning"></a>

```go
func EnforceMessageSigning() *string
```

- *Type:* *string

---

##### `LocalProfileId`<sup>Required</sup> <a name="LocalProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileId"></a>

```go
func LocalProfileId() *string
```

- *Type:* *string

---

##### `PartnerProfileId`<sup>Required</sup> <a name="PartnerProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileId"></a>

```go
func PartnerProfileId() *string
```

- *Type:* *string

---

##### `PreserveFilename`<sup>Required</sup> <a name="PreserveFilename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilename"></a>

```go
func PreserveFilename() *string
```

- *Type:* *string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverId"></a>

```go
func ServerId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferAgreementConfig <a name="TransferAgreementConfig" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transferagreement"

&transferagreement.TransferAgreementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccessRole: *string,
	LocalProfileId: *string,
	PartnerProfileId: *string,
	ServerId: *string,
	BaseDirectory: *string,
	CustomDirectories: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.transferAgreement.TransferAgreementCustomDirectories,
	Description: *string,
	EnforceMessageSigning: *string,
	PreserveFilename: *string,
	Status: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.accessRole">AccessRole</a></code> | <code>*string</code> | Specifies the access role for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.localProfileId">LocalProfileId</a></code> | <code>*string</code> | A unique identifier for the local profile. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.partnerProfileId">PartnerProfileId</a></code> | <code>*string</code> | A unique identifier for the partner profile. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.serverId">ServerId</a></code> | <code>*string</code> | A unique identifier for the server. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.baseDirectory">BaseDirectory</a></code> | <code>*string</code> | Specifies the base directory for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.customDirectories">CustomDirectories</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a></code> | Specifies a separate directory for each type of file to store for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.description">Description</a></code> | <code>*string</code> | A textual description for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.enforceMessageSigning">EnforceMessageSigning</a></code> | <code>*string</code> | Specifies whether to enforce an AS2 message is signed for this agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.preserveFilename">PreserveFilename</a></code> | <code>*string</code> | Specifies whether to preserve the filename received for this agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.status">Status</a></code> | <code>*string</code> | Specifies the status of the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Key-value pairs that can be used to group and search for agreements. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessRole`<sup>Required</sup> <a name="AccessRole" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.accessRole"></a>

```go
AccessRole *string
```

- *Type:* *string

Specifies the access role for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#access_role TransferAgreement#access_role}

---

##### `LocalProfileId`<sup>Required</sup> <a name="LocalProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.localProfileId"></a>

```go
LocalProfileId *string
```

- *Type:* *string

A unique identifier for the local profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#local_profile_id TransferAgreement#local_profile_id}

---

##### `PartnerProfileId`<sup>Required</sup> <a name="PartnerProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.partnerProfileId"></a>

```go
PartnerProfileId *string
```

- *Type:* *string

A unique identifier for the partner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#partner_profile_id TransferAgreement#partner_profile_id}

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.serverId"></a>

```go
ServerId *string
```

- *Type:* *string

A unique identifier for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#server_id TransferAgreement#server_id}

---

##### `BaseDirectory`<sup>Optional</sup> <a name="BaseDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.baseDirectory"></a>

```go
BaseDirectory *string
```

- *Type:* *string

Specifies the base directory for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#base_directory TransferAgreement#base_directory}

---

##### `CustomDirectories`<sup>Optional</sup> <a name="CustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.customDirectories"></a>

```go
CustomDirectories TransferAgreementCustomDirectories
```

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

Specifies a separate directory for each type of file to store for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#custom_directories TransferAgreement#custom_directories}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A textual description for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#description TransferAgreement#description}

---

##### `EnforceMessageSigning`<sup>Optional</sup> <a name="EnforceMessageSigning" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.enforceMessageSigning"></a>

```go
EnforceMessageSigning *string
```

- *Type:* *string

Specifies whether to enforce an AS2 message is signed for this agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#enforce_message_signing TransferAgreement#enforce_message_signing}

---

##### `PreserveFilename`<sup>Optional</sup> <a name="PreserveFilename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.preserveFilename"></a>

```go
PreserveFilename *string
```

- *Type:* *string

Specifies whether to preserve the filename received for this agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#preserve_filename TransferAgreement#preserve_filename}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Specifies the status of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#status TransferAgreement#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Key-value pairs that can be used to group and search for agreements.

Tags are metadata attached to agreements for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#tags TransferAgreement#tags}

---

### TransferAgreementCustomDirectories <a name="TransferAgreementCustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transferagreement"

&transferagreement.TransferAgreementCustomDirectories {
	FailedFilesDirectory: *string,
	MdnFilesDirectory: *string,
	PayloadFilesDirectory: *string,
	StatusFilesDirectory: *string,
	TemporaryFilesDirectory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.failedFilesDirectory">FailedFilesDirectory</a></code> | <code>*string</code> | Specifies a location to store the failed files for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.mdnFilesDirectory">MdnFilesDirectory</a></code> | <code>*string</code> | Specifies a location to store the MDN file for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.payloadFilesDirectory">PayloadFilesDirectory</a></code> | <code>*string</code> | Specifies a location to store the payload file for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.statusFilesDirectory">StatusFilesDirectory</a></code> | <code>*string</code> | Specifies a location to store the status file for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.temporaryFilesDirectory">TemporaryFilesDirectory</a></code> | <code>*string</code> | Specifies a location to store the temporary processing file for an AS2 message. |

---

##### `FailedFilesDirectory`<sup>Optional</sup> <a name="FailedFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.failedFilesDirectory"></a>

```go
FailedFilesDirectory *string
```

- *Type:* *string

Specifies a location to store the failed files for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#failed_files_directory TransferAgreement#failed_files_directory}

---

##### `MdnFilesDirectory`<sup>Optional</sup> <a name="MdnFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.mdnFilesDirectory"></a>

```go
MdnFilesDirectory *string
```

- *Type:* *string

Specifies a location to store the MDN file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#mdn_files_directory TransferAgreement#mdn_files_directory}

---

##### `PayloadFilesDirectory`<sup>Optional</sup> <a name="PayloadFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.payloadFilesDirectory"></a>

```go
PayloadFilesDirectory *string
```

- *Type:* *string

Specifies a location to store the payload file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#payload_files_directory TransferAgreement#payload_files_directory}

---

##### `StatusFilesDirectory`<sup>Optional</sup> <a name="StatusFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.statusFilesDirectory"></a>

```go
StatusFilesDirectory *string
```

- *Type:* *string

Specifies a location to store the status file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#status_files_directory TransferAgreement#status_files_directory}

---

##### `TemporaryFilesDirectory`<sup>Optional</sup> <a name="TemporaryFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.temporaryFilesDirectory"></a>

```go
TemporaryFilesDirectory *string
```

- *Type:* *string

Specifies a location to store the temporary processing file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#temporary_files_directory TransferAgreement#temporary_files_directory}

---

### TransferAgreementTags <a name="TransferAgreementTags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transferagreement"

&transferagreement.TransferAgreementTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.key">Key</a></code> | <code>*string</code> | The name assigned to the tag that you create. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.value">Value</a></code> | <code>*string</code> | Contains one or more values that you assigned to the key name you create. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The name assigned to the tag that you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#key TransferAgreement#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Contains one or more values that you assigned to the key name you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/transfer_agreement#value TransferAgreement#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TransferAgreementCustomDirectoriesOutputReference <a name="TransferAgreementCustomDirectoriesOutputReference" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transferagreement"

transferagreement.NewTransferAgreementCustomDirectoriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TransferAgreementCustomDirectoriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetFailedFilesDirectory">ResetFailedFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetMdnFilesDirectory">ResetMdnFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetPayloadFilesDirectory">ResetPayloadFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetStatusFilesDirectory">ResetStatusFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetTemporaryFilesDirectory">ResetTemporaryFilesDirectory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailedFilesDirectory` <a name="ResetFailedFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetFailedFilesDirectory"></a>

```go
func ResetFailedFilesDirectory()
```

##### `ResetMdnFilesDirectory` <a name="ResetMdnFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetMdnFilesDirectory"></a>

```go
func ResetMdnFilesDirectory()
```

##### `ResetPayloadFilesDirectory` <a name="ResetPayloadFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetPayloadFilesDirectory"></a>

```go
func ResetPayloadFilesDirectory()
```

##### `ResetStatusFilesDirectory` <a name="ResetStatusFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetStatusFilesDirectory"></a>

```go
func ResetStatusFilesDirectory()
```

##### `ResetTemporaryFilesDirectory` <a name="ResetTemporaryFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetTemporaryFilesDirectory"></a>

```go
func ResetTemporaryFilesDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectoryInput">FailedFilesDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectoryInput">MdnFilesDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectoryInput">PayloadFilesDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectoryInput">StatusFilesDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectoryInput">TemporaryFilesDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectory">FailedFilesDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectory">MdnFilesDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectory">PayloadFilesDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectory">StatusFilesDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectory">TemporaryFilesDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailedFilesDirectoryInput`<sup>Optional</sup> <a name="FailedFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectoryInput"></a>

```go
func FailedFilesDirectoryInput() *string
```

- *Type:* *string

---

##### `MdnFilesDirectoryInput`<sup>Optional</sup> <a name="MdnFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectoryInput"></a>

```go
func MdnFilesDirectoryInput() *string
```

- *Type:* *string

---

##### `PayloadFilesDirectoryInput`<sup>Optional</sup> <a name="PayloadFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectoryInput"></a>

```go
func PayloadFilesDirectoryInput() *string
```

- *Type:* *string

---

##### `StatusFilesDirectoryInput`<sup>Optional</sup> <a name="StatusFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectoryInput"></a>

```go
func StatusFilesDirectoryInput() *string
```

- *Type:* *string

---

##### `TemporaryFilesDirectoryInput`<sup>Optional</sup> <a name="TemporaryFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectoryInput"></a>

```go
func TemporaryFilesDirectoryInput() *string
```

- *Type:* *string

---

##### `FailedFilesDirectory`<sup>Required</sup> <a name="FailedFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectory"></a>

```go
func FailedFilesDirectory() *string
```

- *Type:* *string

---

##### `MdnFilesDirectory`<sup>Required</sup> <a name="MdnFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectory"></a>

```go
func MdnFilesDirectory() *string
```

- *Type:* *string

---

##### `PayloadFilesDirectory`<sup>Required</sup> <a name="PayloadFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectory"></a>

```go
func PayloadFilesDirectory() *string
```

- *Type:* *string

---

##### `StatusFilesDirectory`<sup>Required</sup> <a name="StatusFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectory"></a>

```go
func StatusFilesDirectory() *string
```

- *Type:* *string

---

##### `TemporaryFilesDirectory`<sup>Required</sup> <a name="TemporaryFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectory"></a>

```go
func TemporaryFilesDirectory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TransferAgreementTagsList <a name="TransferAgreementTagsList" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transferagreement"

transferagreement.NewTransferAgreementTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TransferAgreementTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.get"></a>

```go
func Get(index *f64) TransferAgreementTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TransferAgreementTagsOutputReference <a name="TransferAgreementTagsOutputReference" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/transferagreement"

transferagreement.NewTransferAgreementTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TransferAgreementTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



