# `quicksightAnalysis` Submodule <a name="`quicksightAnalysis` Submodule" id="@cdktn/provider-awscc.quicksightAnalysis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightAnalysis <a name="QuicksightAnalysis" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis awscc_quicksight_analysis}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysis(scope Construct, id *string, config QuicksightAnalysisConfig) QuicksightAnalysis
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig">QuicksightAnalysisConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig">QuicksightAnalysisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putErrors">PutErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putSourceEntity">PutSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetErrors">ResetErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetThemeArn">ResetThemeArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutErrors` <a name="PutErrors" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putErrors"></a>

```go
func PutErrors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putErrors.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putParameters"></a>

```go
func PutParameters(value QuicksightAnalysisParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putPermissions"></a>

```go
func PutPermissions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putPermissions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceEntity` <a name="PutSourceEntity" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putSourceEntity"></a>

```go
func PutSourceEntity(value QuicksightAnalysisSourceEntity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putSourceEntity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetErrors` <a name="ResetErrors" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetErrors"></a>

```go
func ResetErrors()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetName"></a>

```go
func ResetName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThemeArn` <a name="ResetThemeArn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.resetThemeArn"></a>

```go
func ResetThemeArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightAnalysis resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.QuicksightAnalysis_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.QuicksightAnalysis_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.QuicksightAnalysis_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.QuicksightAnalysis_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a QuicksightAnalysis resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuicksightAnalysis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuicksightAnalysis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightAnalysis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.dataSetArns">DataSetArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList">QuicksightAnalysisErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference">QuicksightAnalysisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList">QuicksightAnalysisPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.sheets">Sheets</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList">QuicksightAnalysisSheetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.sourceEntity">SourceEntity</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference">QuicksightAnalysisSourceEntityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList">QuicksightAnalysisTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.analysisIdInput">AnalysisIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.errorsInput">ErrorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.permissionsInput">PermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.sourceEntityInput">SourceEntityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.themeArnInput">ThemeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.analysisId">AnalysisId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.themeArn">ThemeArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `DataSetArns`<sup>Required</sup> <a name="DataSetArns" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.dataSetArns"></a>

```go
func DataSetArns() *[]*string
```

- *Type:* *[]*string

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.errors"></a>

```go
func Errors() QuicksightAnalysisErrorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList">QuicksightAnalysisErrorsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.parameters"></a>

```go
func Parameters() QuicksightAnalysisParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference">QuicksightAnalysisParametersOutputReference</a>

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.permissions"></a>

```go
func Permissions() QuicksightAnalysisPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList">QuicksightAnalysisPermissionsList</a>

---

##### `Sheets`<sup>Required</sup> <a name="Sheets" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.sheets"></a>

```go
func Sheets() QuicksightAnalysisSheetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList">QuicksightAnalysisSheetsList</a>

---

##### `SourceEntity`<sup>Required</sup> <a name="SourceEntity" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.sourceEntity"></a>

```go
func SourceEntity() QuicksightAnalysisSourceEntityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference">QuicksightAnalysisSourceEntityOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.tags"></a>

```go
func Tags() QuicksightAnalysisTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList">QuicksightAnalysisTagsList</a>

---

##### `AnalysisIdInput`<sup>Optional</sup> <a name="AnalysisIdInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.analysisIdInput"></a>

```go
func AnalysisIdInput() *string
```

- *Type:* *string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `ErrorsInput`<sup>Optional</sup> <a name="ErrorsInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.errorsInput"></a>

```go
func ErrorsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.permissionsInput"></a>

```go
func PermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceEntityInput`<sup>Optional</sup> <a name="SourceEntityInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.sourceEntityInput"></a>

```go
func SourceEntityInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ThemeArnInput`<sup>Optional</sup> <a name="ThemeArnInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.themeArnInput"></a>

```go
func ThemeArnInput() *string
```

- *Type:* *string

---

##### `AnalysisId`<sup>Required</sup> <a name="AnalysisId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.analysisId"></a>

```go
func AnalysisId() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ThemeArn`<sup>Required</sup> <a name="ThemeArn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.themeArn"></a>

```go
func ThemeArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysis.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightAnalysisConfig <a name="QuicksightAnalysisConfig" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

&quicksightanalysis.QuicksightAnalysisConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AnalysisId: *string,
	AwsAccountId: *string,
	SourceEntity: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity,
	Errors: interface{},
	Name: *string,
	Parameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightAnalysis.QuicksightAnalysisParameters,
	Permissions: interface{},
	Tags: interface{},
	ThemeArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.analysisId">AnalysisId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#analysis_id QuicksightAnalysis#analysis_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#aws_account_id QuicksightAnalysis#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.sourceEntity">SourceEntity</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a></code> | <p>The source entity of an analysis.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.errors">Errors</a></code> | <code>interface{}</code> | <p>Errors associated with the analysis.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.name">Name</a></code> | <code>*string</code> | <p>The descriptive name of the analysis.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a></code> | <p>A list of QuickSight parameters and the list's override values.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.permissions">Permissions</a></code> | <code>interface{}</code> | <p>A structure that describes the principals and the resource-level permissions on an             analysis. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.tags">Tags</a></code> | <code>interface{}</code> | <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the             analysis.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.themeArn">ThemeArn</a></code> | <code>*string</code> | <p>The ARN of the theme of the analysis.</p>. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnalysisId`<sup>Required</sup> <a name="AnalysisId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.analysisId"></a>

```go
AnalysisId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#analysis_id QuicksightAnalysis#analysis_id}.

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#aws_account_id QuicksightAnalysis#aws_account_id}.

---

##### `SourceEntity`<sup>Required</sup> <a name="SourceEntity" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.sourceEntity"></a>

```go
SourceEntity QuicksightAnalysisSourceEntity
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity">QuicksightAnalysisSourceEntity</a>

<p>The source entity of an analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#source_entity QuicksightAnalysis#source_entity}

---

##### `Errors`<sup>Optional</sup> <a name="Errors" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.errors"></a>

```go
Errors interface{}
```

- *Type:* interface{}

<p>Errors associated with the analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#errors QuicksightAnalysis#errors}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

<p>The descriptive name of the analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.parameters"></a>

```go
Parameters QuicksightAnalysisParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters">QuicksightAnalysisParameters</a>

<p>A list of QuickSight parameters and the list's override values.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#parameters QuicksightAnalysis#parameters}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.permissions"></a>

```go
Permissions interface{}
```

- *Type:* interface{}

<p>A structure that describes the principals and the resource-level permissions on an             analysis.

You can use the <code>Permissions</code> structure to grant permissions by
providing a list of AWS Identity and Access Management (IAM) action information for each
principal listed by Amazon Resource Name (ARN). </p>

```
    <p>To specify no permissions, omit <code>Permissions</code>.</p>
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#permissions QuicksightAnalysis#permissions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the             analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#tags QuicksightAnalysis#tags}

---

##### `ThemeArn`<sup>Optional</sup> <a name="ThemeArn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisConfig.property.themeArn"></a>

```go
ThemeArn *string
```

- *Type:* *string

<p>The ARN of the theme of the analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#theme_arn QuicksightAnalysis#theme_arn}

---

### QuicksightAnalysisErrors <a name="QuicksightAnalysisErrors" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

&quicksightanalysis.QuicksightAnalysisErrors {
	Message: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors.property.message">Message</a></code> | <code>*string</code> | <p>The message associated with the analysis error.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#type QuicksightAnalysis#type}. |

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors.property.message"></a>

```go
Message *string
```

- *Type:* *string

<p>The message associated with the analysis error.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#message QuicksightAnalysis#message}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrors.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#type QuicksightAnalysis#type}.

---

### QuicksightAnalysisParameters <a name="QuicksightAnalysisParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

&quicksightanalysis.QuicksightAnalysisParameters {
	DateTimeParameters: interface{},
	DecimalParameters: interface{},
	IntegerParameters: interface{},
	StringParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.dateTimeParameters">DateTimeParameters</a></code> | <code>interface{}</code> | <p>Date-time parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.decimalParameters">DecimalParameters</a></code> | <code>interface{}</code> | <p>Decimal parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.integerParameters">IntegerParameters</a></code> | <code>interface{}</code> | <p>Integer parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.stringParameters">StringParameters</a></code> | <code>interface{}</code> | <p>String parameters.</p>. |

---

##### `DateTimeParameters`<sup>Optional</sup> <a name="DateTimeParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.dateTimeParameters"></a>

```go
DateTimeParameters interface{}
```

- *Type:* interface{}

<p>Date-time parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#date_time_parameters QuicksightAnalysis#date_time_parameters}

---

##### `DecimalParameters`<sup>Optional</sup> <a name="DecimalParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.decimalParameters"></a>

```go
DecimalParameters interface{}
```

- *Type:* interface{}

<p>Decimal parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#decimal_parameters QuicksightAnalysis#decimal_parameters}

---

##### `IntegerParameters`<sup>Optional</sup> <a name="IntegerParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.integerParameters"></a>

```go
IntegerParameters interface{}
```

- *Type:* interface{}

<p>Integer parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#integer_parameters QuicksightAnalysis#integer_parameters}

---

##### `StringParameters`<sup>Optional</sup> <a name="StringParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParameters.property.stringParameters"></a>

```go
StringParameters interface{}
```

- *Type:* interface{}

<p>String parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#string_parameters QuicksightAnalysis#string_parameters}

---

### QuicksightAnalysisParametersDateTimeParameters <a name="QuicksightAnalysisParametersDateTimeParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

&quicksightanalysis.QuicksightAnalysisParametersDateTimeParameters {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.name">Name</a></code> | <code>*string</code> | <p>A display name for the date-time parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.values">Values</a></code> | <code>*[]*string</code> | <p>The values for the date-time parameter.</p>. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

<p>A display name for the date-time parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParameters.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

<p>The values for the date-time parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}

---

### QuicksightAnalysisParametersDecimalParameters <a name="QuicksightAnalysisParametersDecimalParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

&quicksightanalysis.QuicksightAnalysisParametersDecimalParameters {
	Name: *string,
	Values: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.name">Name</a></code> | <code>*string</code> | <p>A display name for the decimal parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.values">Values</a></code> | <code>*[]*f64</code> | <p>The values for the decimal parameter.</p>. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

<p>A display name for the decimal parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParameters.property.values"></a>

```go
Values *[]*f64
```

- *Type:* *[]*f64

<p>The values for the decimal parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}

---

### QuicksightAnalysisParametersIntegerParameters <a name="QuicksightAnalysisParametersIntegerParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

&quicksightanalysis.QuicksightAnalysisParametersIntegerParameters {
	Name: *string,
	Values: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.name">Name</a></code> | <code>*string</code> | <p>The name of the integer parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.values">Values</a></code> | <code>*[]*f64</code> | <p>The values for the integer parameter.</p>. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

<p>The name of the integer parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParameters.property.values"></a>

```go
Values *[]*f64
```

- *Type:* *[]*f64

<p>The values for the integer parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}

---

### QuicksightAnalysisParametersStringParameters <a name="QuicksightAnalysisParametersStringParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

&quicksightanalysis.QuicksightAnalysisParametersStringParameters {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.name">Name</a></code> | <code>*string</code> | <p>A display name for a string parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.values">Values</a></code> | <code>*[]*string</code> | <p>The values of a string parameter.</p>. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

<p>A display name for a string parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParameters.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

<p>The values of a string parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}

---

### QuicksightAnalysisPermissions <a name="QuicksightAnalysisPermissions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

&quicksightanalysis.QuicksightAnalysisPermissions {
	Actions: *[]*string,
	Principal: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions.property.actions">Actions</a></code> | <code>*[]*string</code> | <p>The IAM action to grant or revoke permissions on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions.property.principal">Principal</a></code> | <code>*string</code> | <p>The Amazon Resource Name (ARN) of the principal. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

<p>The IAM action to grant or revoke permissions on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#actions QuicksightAnalysis#actions}

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissions.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

<p>The Amazon Resource Name (ARN) of the principal.

This can be one of the
following:</p>
<ul>
<li>
<p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
</li>
<li>
<p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
ARN. Use this option only to share resources (templates) across AWS accounts.
(This is less common.) </p>
</li>
</ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#principal QuicksightAnalysis#principal}

---

### QuicksightAnalysisSheets <a name="QuicksightAnalysisSheets" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

&quicksightanalysis.QuicksightAnalysisSheets {

}
```


### QuicksightAnalysisSourceEntity <a name="QuicksightAnalysisSourceEntity" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

&quicksightanalysis.QuicksightAnalysisSourceEntity {
	SourceTemplate: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity.property.sourceTemplate">SourceTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a></code> | <p>The source template of an analysis.</p>. |

---

##### `SourceTemplate`<sup>Optional</sup> <a name="SourceTemplate" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntity.property.sourceTemplate"></a>

```go
SourceTemplate QuicksightAnalysisSourceEntitySourceTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a>

<p>The source template of an analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#source_template QuicksightAnalysis#source_template}

---

### QuicksightAnalysisSourceEntitySourceTemplate <a name="QuicksightAnalysisSourceEntitySourceTemplate" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

&quicksightanalysis.QuicksightAnalysisSourceEntitySourceTemplate {
	Arn: *string,
	DataSetReferences: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.arn">Arn</a></code> | <code>*string</code> | <p>The Amazon Resource Name (ARN) of the source template of an analysis.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.dataSetReferences">DataSetReferences</a></code> | <code>interface{}</code> | <p>The dataset references of the source template of an analysis.</p>. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

<p>The Amazon Resource Name (ARN) of the source template of an analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#arn QuicksightAnalysis#arn}

---

##### `DataSetReferences`<sup>Optional</sup> <a name="DataSetReferences" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate.property.dataSetReferences"></a>

```go
DataSetReferences interface{}
```

- *Type:* interface{}

<p>The dataset references of the source template of an analysis.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#data_set_references QuicksightAnalysis#data_set_references}

---

### QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences <a name="QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

&quicksightanalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences {
	DataSetArn: *string,
	DataSetPlaceholder: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetArn">DataSetArn</a></code> | <code>*string</code> | <p>Dataset Amazon Resource Name (ARN).</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder">DataSetPlaceholder</a></code> | <code>*string</code> | <p>Dataset placeholder.</p>. |

---

##### `DataSetArn`<sup>Optional</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetArn"></a>

```go
DataSetArn *string
```

- *Type:* *string

<p>Dataset Amazon Resource Name (ARN).</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#data_set_arn QuicksightAnalysis#data_set_arn}

---

##### `DataSetPlaceholder`<sup>Optional</sup> <a name="DataSetPlaceholder" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder"></a>

```go
DataSetPlaceholder *string
```

- *Type:* *string

<p>Dataset placeholder.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#data_set_placeholder QuicksightAnalysis#data_set_placeholder}

---

### QuicksightAnalysisTags <a name="QuicksightAnalysisTags" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

&quicksightanalysis.QuicksightAnalysisTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags.property.key">Key</a></code> | <code>*string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags.property.value">Value</a></code> | <code>*string</code> | <p>Tag value.</p>. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#key QuicksightAnalysis#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_analysis#value QuicksightAnalysis#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightAnalysisErrorsList <a name="QuicksightAnalysisErrorsList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightAnalysisErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.get"></a>

```go
func Get(index *f64) QuicksightAnalysisErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisErrorsOutputReference <a name="QuicksightAnalysisErrorsOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightAnalysisErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisParametersDateTimeParametersList <a name="QuicksightAnalysisParametersDateTimeParametersList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisParametersDateTimeParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightAnalysisParametersDateTimeParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.get"></a>

```go
func Get(index *f64) QuicksightAnalysisParametersDateTimeParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisParametersDateTimeParametersOutputReference <a name="QuicksightAnalysisParametersDateTimeParametersOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisParametersDateTimeParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightAnalysisParametersDateTimeParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisParametersDecimalParametersList <a name="QuicksightAnalysisParametersDecimalParametersList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisParametersDecimalParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightAnalysisParametersDecimalParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.get"></a>

```go
func Get(index *f64) QuicksightAnalysisParametersDecimalParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisParametersDecimalParametersOutputReference <a name="QuicksightAnalysisParametersDecimalParametersOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisParametersDecimalParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightAnalysisParametersDecimalParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisParametersIntegerParametersList <a name="QuicksightAnalysisParametersIntegerParametersList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisParametersIntegerParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightAnalysisParametersIntegerParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.get"></a>

```go
func Get(index *f64) QuicksightAnalysisParametersIntegerParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisParametersIntegerParametersOutputReference <a name="QuicksightAnalysisParametersIntegerParametersOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisParametersIntegerParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightAnalysisParametersIntegerParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisParametersOutputReference <a name="QuicksightAnalysisParametersOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightAnalysisParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDateTimeParameters">PutDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDecimalParameters">PutDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putIntegerParameters">PutIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putStringParameters">PutStringParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDateTimeParameters">ResetDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDecimalParameters">ResetDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetIntegerParameters">ResetIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetStringParameters">ResetStringParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateTimeParameters` <a name="PutDateTimeParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDateTimeParameters"></a>

```go
func PutDateTimeParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDateTimeParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDecimalParameters` <a name="PutDecimalParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDecimalParameters"></a>

```go
func PutDecimalParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putDecimalParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIntegerParameters` <a name="PutIntegerParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putIntegerParameters"></a>

```go
func PutIntegerParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putIntegerParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStringParameters` <a name="PutStringParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putStringParameters"></a>

```go
func PutStringParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.putStringParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDateTimeParameters` <a name="ResetDateTimeParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDateTimeParameters"></a>

```go
func ResetDateTimeParameters()
```

##### `ResetDecimalParameters` <a name="ResetDecimalParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetDecimalParameters"></a>

```go
func ResetDecimalParameters()
```

##### `ResetIntegerParameters` <a name="ResetIntegerParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetIntegerParameters"></a>

```go
func ResetIntegerParameters()
```

##### `ResetStringParameters` <a name="ResetStringParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.resetStringParameters"></a>

```go
func ResetStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParameters">DateTimeParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList">QuicksightAnalysisParametersDateTimeParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParameters">DecimalParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList">QuicksightAnalysisParametersDecimalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParameters">IntegerParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList">QuicksightAnalysisParametersIntegerParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParameters">StringParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList">QuicksightAnalysisParametersStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParametersInput">DateTimeParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParametersInput">DecimalParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParametersInput">IntegerParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParametersInput">StringParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateTimeParameters`<sup>Required</sup> <a name="DateTimeParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParameters"></a>

```go
func DateTimeParameters() QuicksightAnalysisParametersDateTimeParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDateTimeParametersList">QuicksightAnalysisParametersDateTimeParametersList</a>

---

##### `DecimalParameters`<sup>Required</sup> <a name="DecimalParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParameters"></a>

```go
func DecimalParameters() QuicksightAnalysisParametersDecimalParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersDecimalParametersList">QuicksightAnalysisParametersDecimalParametersList</a>

---

##### `IntegerParameters`<sup>Required</sup> <a name="IntegerParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParameters"></a>

```go
func IntegerParameters() QuicksightAnalysisParametersIntegerParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersIntegerParametersList">QuicksightAnalysisParametersIntegerParametersList</a>

---

##### `StringParameters`<sup>Required</sup> <a name="StringParameters" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParameters"></a>

```go
func StringParameters() QuicksightAnalysisParametersStringParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList">QuicksightAnalysisParametersStringParametersList</a>

---

##### `DateTimeParametersInput`<sup>Optional</sup> <a name="DateTimeParametersInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.dateTimeParametersInput"></a>

```go
func DateTimeParametersInput() interface{}
```

- *Type:* interface{}

---

##### `DecimalParametersInput`<sup>Optional</sup> <a name="DecimalParametersInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.decimalParametersInput"></a>

```go
func DecimalParametersInput() interface{}
```

- *Type:* interface{}

---

##### `IntegerParametersInput`<sup>Optional</sup> <a name="IntegerParametersInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.integerParametersInput"></a>

```go
func IntegerParametersInput() interface{}
```

- *Type:* interface{}

---

##### `StringParametersInput`<sup>Optional</sup> <a name="StringParametersInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.stringParametersInput"></a>

```go
func StringParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisParametersStringParametersList <a name="QuicksightAnalysisParametersStringParametersList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisParametersStringParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightAnalysisParametersStringParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.get"></a>

```go
func Get(index *f64) QuicksightAnalysisParametersStringParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisParametersStringParametersOutputReference <a name="QuicksightAnalysisParametersStringParametersOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisParametersStringParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightAnalysisParametersStringParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisParametersStringParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisPermissionsList <a name="QuicksightAnalysisPermissionsList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightAnalysisPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.get"></a>

```go
func Get(index *f64) QuicksightAnalysisPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisPermissionsOutputReference <a name="QuicksightAnalysisPermissionsOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightAnalysisPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resetActions"></a>

```go
func ResetActions()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisSheetsList <a name="QuicksightAnalysisSheetsList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisSheetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightAnalysisSheetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.get"></a>

```go
func Get(index *f64) QuicksightAnalysisSheetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### QuicksightAnalysisSheetsOutputReference <a name="QuicksightAnalysisSheetsOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisSheetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightAnalysisSheetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.sheetId">SheetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheets">QuicksightAnalysisSheets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SheetId`<sup>Required</sup> <a name="SheetId" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.sheetId"></a>

```go
func SheetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheetsOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightAnalysisSheets
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSheets">QuicksightAnalysisSheets</a>

---


### QuicksightAnalysisSourceEntityOutputReference <a name="QuicksightAnalysisSourceEntityOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisSourceEntityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightAnalysisSourceEntityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.putSourceTemplate">PutSourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resetSourceTemplate">ResetSourceTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceTemplate` <a name="PutSourceTemplate" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.putSourceTemplate"></a>

```go
func PutSourceTemplate(value QuicksightAnalysisSourceEntitySourceTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.putSourceTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplate">QuicksightAnalysisSourceEntitySourceTemplate</a>

---

##### `ResetSourceTemplate` <a name="ResetSourceTemplate" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.resetSourceTemplate"></a>

```go
func ResetSourceTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplate">SourceTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference">QuicksightAnalysisSourceEntitySourceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplateInput">SourceTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceTemplate`<sup>Required</sup> <a name="SourceTemplate" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplate"></a>

```go
func SourceTemplate() QuicksightAnalysisSourceEntitySourceTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference">QuicksightAnalysisSourceEntitySourceTemplateOutputReference</a>

---

##### `SourceTemplateInput`<sup>Optional</sup> <a name="SourceTemplateInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.sourceTemplateInput"></a>

```go
func SourceTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList <a name="QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get"></a>

```go
func Get(index *f64) QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference <a name="QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetArn">ResetDataSetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetPlaceholder">ResetDataSetPlaceholder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataSetArn` <a name="ResetDataSetArn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetArn"></a>

```go
func ResetDataSetArn()
```

##### `ResetDataSetPlaceholder` <a name="ResetDataSetPlaceholder" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetPlaceholder"></a>

```go
func ResetDataSetPlaceholder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput">DataSetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput">DataSetPlaceholderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder">DataSetPlaceholder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSetArnInput`<sup>Optional</sup> <a name="DataSetArnInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput"></a>

```go
func DataSetArnInput() *string
```

- *Type:* *string

---

##### `DataSetPlaceholderInput`<sup>Optional</sup> <a name="DataSetPlaceholderInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput"></a>

```go
func DataSetPlaceholderInput() *string
```

- *Type:* *string

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn"></a>

```go
func DataSetArn() *string
```

- *Type:* *string

---

##### `DataSetPlaceholder`<sup>Required</sup> <a name="DataSetPlaceholder" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder"></a>

```go
func DataSetPlaceholder() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisSourceEntitySourceTemplateOutputReference <a name="QuicksightAnalysisSourceEntitySourceTemplateOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisSourceEntitySourceTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightAnalysisSourceEntitySourceTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.putDataSetReferences">PutDataSetReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resetDataSetReferences">ResetDataSetReferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataSetReferences` <a name="PutDataSetReferences" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.putDataSetReferences"></a>

```go
func PutDataSetReferences(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.putDataSetReferences.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resetArn"></a>

```go
func ResetArn()
```

##### `ResetDataSetReferences` <a name="ResetDataSetReferences" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.resetDataSetReferences"></a>

```go
func ResetDataSetReferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferences">DataSetReferences</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput">DataSetReferencesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSetReferences`<sup>Required</sup> <a name="DataSetReferences" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferences"></a>

```go
func DataSetReferences() QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList">QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `DataSetReferencesInput`<sup>Optional</sup> <a name="DataSetReferencesInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput"></a>

```go
func DataSetReferencesInput() interface{}
```

- *Type:* interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisSourceEntitySourceTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisTagsList <a name="QuicksightAnalysisTagsList" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightAnalysisTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.get"></a>

```go
func Get(index *f64) QuicksightAnalysisTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightAnalysisTagsOutputReference <a name="QuicksightAnalysisTagsOutputReference" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightanalysis"

quicksightanalysis.NewQuicksightAnalysisTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightAnalysisTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightAnalysis.QuicksightAnalysisTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



