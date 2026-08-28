# `quicksightDlpSetting` Submodule <a name="`quicksightDlpSetting` Submodule" id="@cdktn/provider-awscc.quicksightDlpSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDlpSetting <a name="QuicksightDlpSetting" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting awscc_quicksight_dlp_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

quicksightdlpsetting.NewQuicksightDlpSetting(scope Construct, id *string, config QuicksightDlpSettingConfig) QuicksightDlpSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig">QuicksightDlpSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig">QuicksightDlpSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putProviderConfig"></a>

```go
func PutProviderConfig(value QuicksightDlpSettingProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightDlpSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

quicksightdlpsetting.QuicksightDlpSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

quicksightdlpsetting.QuicksightDlpSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

quicksightdlpsetting.QuicksightDlpSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

quicksightdlpsetting.QuicksightDlpSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a QuicksightDlpSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuicksightDlpSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuicksightDlpSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightDlpSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference">QuicksightDlpSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList">QuicksightDlpSettingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dlpSettingIdInput">DlpSettingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerConfigInput">ProviderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerOutageActionInput">ProviderOutageActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerTypeInput">ProviderTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dlpSettingId">DlpSettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerOutageAction">ProviderOutageAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerType">ProviderType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerConfig"></a>

```go
func ProviderConfig() QuicksightDlpSettingProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference">QuicksightDlpSettingProviderConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tags"></a>

```go
func Tags() QuicksightDlpSettingTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList">QuicksightDlpSettingTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `DlpSettingIdInput`<sup>Optional</sup> <a name="DlpSettingIdInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dlpSettingIdInput"></a>

```go
func DlpSettingIdInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerConfigInput"></a>

```go
func ProviderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ProviderOutageActionInput`<sup>Optional</sup> <a name="ProviderOutageActionInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerOutageActionInput"></a>

```go
func ProviderOutageActionInput() *string
```

- *Type:* *string

---

##### `ProviderTypeInput`<sup>Optional</sup> <a name="ProviderTypeInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerTypeInput"></a>

```go
func ProviderTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `DlpSettingId`<sup>Required</sup> <a name="DlpSettingId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.dlpSettingId"></a>

```go
func DlpSettingId() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderOutageAction`<sup>Required</sup> <a name="ProviderOutageAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerOutageAction"></a>

```go
func ProviderOutageAction() *string
```

- *Type:* *string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.providerType"></a>

```go
func ProviderType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDlpSettingConfig <a name="QuicksightDlpSettingConfig" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

&quicksightdlpsetting.QuicksightDlpSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DlpSettingId: *string,
	Name: *string,
	ProviderConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig,
	ProviderOutageAction: *string,
	ProviderType: *string,
	AwsAccountId: *string,
	Enabled: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.dlpSettingId">DlpSettingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#dlp_setting_id QuicksightDlpSetting#dlp_setting_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#name QuicksightDlpSetting#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#provider_config QuicksightDlpSetting#provider_config}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerOutageAction">ProviderOutageAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#provider_outage_action QuicksightDlpSetting#provider_outage_action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerType">ProviderType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#provider_type QuicksightDlpSetting#provider_type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#aws_account_id QuicksightDlpSetting#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#enabled QuicksightDlpSetting#enabled}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#tags QuicksightDlpSetting#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DlpSettingId`<sup>Required</sup> <a name="DlpSettingId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.dlpSettingId"></a>

```go
DlpSettingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#dlp_setting_id QuicksightDlpSetting#dlp_setting_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#name QuicksightDlpSetting#name}.

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerConfig"></a>

```go
ProviderConfig QuicksightDlpSettingProviderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig">QuicksightDlpSettingProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#provider_config QuicksightDlpSetting#provider_config}.

---

##### `ProviderOutageAction`<sup>Required</sup> <a name="ProviderOutageAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerOutageAction"></a>

```go
ProviderOutageAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#provider_outage_action QuicksightDlpSetting#provider_outage_action}.

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.providerType"></a>

```go
ProviderType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#provider_type QuicksightDlpSetting#provider_type}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#aws_account_id QuicksightDlpSetting#aws_account_id}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#enabled QuicksightDlpSetting#enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#tags QuicksightDlpSetting#tags}.

---

### QuicksightDlpSettingProviderConfig <a name="QuicksightDlpSettingProviderConfig" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

&quicksightdlpsetting.QuicksightDlpSettingProviderConfig {
	MicrosoftPurview: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig.property.microsoftPurview">MicrosoftPurview</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#microsoft_purview QuicksightDlpSetting#microsoft_purview}. |

---

##### `MicrosoftPurview`<sup>Optional</sup> <a name="MicrosoftPurview" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfig.property.microsoftPurview"></a>

```go
MicrosoftPurview QuicksightDlpSettingProviderConfigMicrosoftPurview
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#microsoft_purview QuicksightDlpSetting#microsoft_purview}.

---

### QuicksightDlpSettingProviderConfigMicrosoftPurview <a name="QuicksightDlpSettingProviderConfigMicrosoftPurview" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

&quicksightdlpsetting.QuicksightDlpSettingProviderConfigMicrosoftPurview {
	Credentials: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials,
	LabelActionMappings: interface{},
	UnmappedAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#credentials QuicksightDlpSetting#credentials}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.labelActionMappings">LabelActionMappings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#label_action_mappings QuicksightDlpSetting#label_action_mappings}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.unmappedAction">UnmappedAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#unmapped_action QuicksightDlpSetting#unmapped_action}. |

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.credentials"></a>

```go
Credentials QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#credentials QuicksightDlpSetting#credentials}.

---

##### `LabelActionMappings`<sup>Optional</sup> <a name="LabelActionMappings" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.labelActionMappings"></a>

```go
LabelActionMappings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#label_action_mappings QuicksightDlpSetting#label_action_mappings}.

---

##### `UnmappedAction`<sup>Optional</sup> <a name="UnmappedAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview.property.unmappedAction"></a>

```go
UnmappedAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#unmapped_action QuicksightDlpSetting#unmapped_action}.

---

### QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

&quicksightdlpsetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials {
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials.property.secretArn">SecretArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#secret_arn QuicksightDlpSetting#secret_arn}. |

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#secret_arn QuicksightDlpSetting#secret_arn}.

---

### QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

&quicksightdlpsetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings {
	Action: *string,
	LabelId: *string,
	LabelName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#action QuicksightDlpSetting#action}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.labelId">LabelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#label_id QuicksightDlpSetting#label_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.labelName">LabelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#label_name QuicksightDlpSetting#label_name}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#action QuicksightDlpSetting#action}.

---

##### `LabelId`<sup>Optional</sup> <a name="LabelId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.labelId"></a>

```go
LabelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#label_id QuicksightDlpSetting#label_id}.

---

##### `LabelName`<sup>Optional</sup> <a name="LabelName" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappings.property.labelName"></a>

```go
LabelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#label_name QuicksightDlpSetting#label_name}.

---

### QuicksightDlpSettingTags <a name="QuicksightDlpSettingTags" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

&quicksightdlpsetting.QuicksightDlpSettingTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags.property.key">Key</a></code> | <code>*string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags.property.value">Value</a></code> | <code>*string</code> | <p>Tag value.</p>. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#key QuicksightDlpSetting#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dlp_setting#value QuicksightDlpSetting#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

quicksightdlpsetting.NewQuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

quicksightdlpsetting.NewQuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.get"></a>

```go
func Get(index *f64) QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

quicksightdlpsetting.NewQuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetLabelId">ResetLabelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetLabelName">ResetLabelName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetLabelId` <a name="ResetLabelId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetLabelId"></a>

```go
func ResetLabelId()
```

##### `ResetLabelName` <a name="ResetLabelName" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.resetLabelName"></a>

```go
func ResetLabelName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelIdInput">LabelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelNameInput">LabelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelId">LabelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelName">LabelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `LabelIdInput`<sup>Optional</sup> <a name="LabelIdInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelIdInput"></a>

```go
func LabelIdInput() *string
```

- *Type:* *string

---

##### `LabelNameInput`<sup>Optional</sup> <a name="LabelNameInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelNameInput"></a>

```go
func LabelNameInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `LabelId`<sup>Required</sup> <a name="LabelId" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelId"></a>

```go
func LabelId() *string
```

- *Type:* *string

---

##### `LabelName`<sup>Required</sup> <a name="LabelName" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.labelName"></a>

```go
func LabelName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference <a name="QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

quicksightdlpsetting.NewQuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putLabelActionMappings">PutLabelActionMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetLabelActionMappings">ResetLabelActionMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetUnmappedAction">ResetUnmappedAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCredentials` <a name="PutCredentials" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putCredentials"></a>

```go
func PutCredentials(value QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentials</a>

---

##### `PutLabelActionMappings` <a name="PutLabelActionMappings" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putLabelActionMappings"></a>

```go
func PutLabelActionMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.putLabelActionMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetLabelActionMappings` <a name="ResetLabelActionMappings" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetLabelActionMappings"></a>

```go
func ResetLabelActionMappings()
```

##### `ResetUnmappedAction` <a name="ResetUnmappedAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.resetUnmappedAction"></a>

```go
func ResetUnmappedAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.labelActionMappings">LabelActionMappings</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.credentialsInput">CredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.labelActionMappingsInput">LabelActionMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.unmappedActionInput">UnmappedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.unmappedAction">UnmappedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.credentials"></a>

```go
func Credentials() QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference">QuicksightDlpSettingProviderConfigMicrosoftPurviewCredentialsOutputReference</a>

---

##### `LabelActionMappings`<sup>Required</sup> <a name="LabelActionMappings" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.labelActionMappings"></a>

```go
func LabelActionMappings() QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList">QuicksightDlpSettingProviderConfigMicrosoftPurviewLabelActionMappingsList</a>

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.credentialsInput"></a>

```go
func CredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `LabelActionMappingsInput`<sup>Optional</sup> <a name="LabelActionMappingsInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.labelActionMappingsInput"></a>

```go
func LabelActionMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `UnmappedActionInput`<sup>Optional</sup> <a name="UnmappedActionInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.unmappedActionInput"></a>

```go
func UnmappedActionInput() *string
```

- *Type:* *string

---

##### `UnmappedAction`<sup>Required</sup> <a name="UnmappedAction" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.unmappedAction"></a>

```go
func UnmappedAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDlpSettingProviderConfigOutputReference <a name="QuicksightDlpSettingProviderConfigOutputReference" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

quicksightdlpsetting.NewQuicksightDlpSettingProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDlpSettingProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.putMicrosoftPurview">PutMicrosoftPurview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.resetMicrosoftPurview">ResetMicrosoftPurview</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMicrosoftPurview` <a name="PutMicrosoftPurview" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.putMicrosoftPurview"></a>

```go
func PutMicrosoftPurview(value QuicksightDlpSettingProviderConfigMicrosoftPurview)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.putMicrosoftPurview.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurview">QuicksightDlpSettingProviderConfigMicrosoftPurview</a>

---

##### `ResetMicrosoftPurview` <a name="ResetMicrosoftPurview" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.resetMicrosoftPurview"></a>

```go
func ResetMicrosoftPurview()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.microsoftPurview">MicrosoftPurview</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference">QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.microsoftPurviewInput">MicrosoftPurviewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MicrosoftPurview`<sup>Required</sup> <a name="MicrosoftPurview" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.microsoftPurview"></a>

```go
func MicrosoftPurview() QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference">QuicksightDlpSettingProviderConfigMicrosoftPurviewOutputReference</a>

---

##### `MicrosoftPurviewInput`<sup>Optional</sup> <a name="MicrosoftPurviewInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.microsoftPurviewInput"></a>

```go
func MicrosoftPurviewInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDlpSettingTagsList <a name="QuicksightDlpSettingTagsList" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

quicksightdlpsetting.NewQuicksightDlpSettingTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDlpSettingTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.get"></a>

```go
func Get(index *f64) QuicksightDlpSettingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDlpSettingTagsOutputReference <a name="QuicksightDlpSettingTagsOutputReference" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdlpsetting"

quicksightdlpsetting.NewQuicksightDlpSettingTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDlpSettingTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDlpSetting.QuicksightDlpSettingTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



