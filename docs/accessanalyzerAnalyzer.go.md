# `accessanalyzerAnalyzer` Submodule <a name="`accessanalyzerAnalyzer` Submodule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessanalyzerAnalyzer <a name="AccessanalyzerAnalyzer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer awscc_accessanalyzer_analyzer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzer(scope Construct, id *string, config AccessanalyzerAnalyzerConfig) AccessanalyzerAnalyzer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig">AccessanalyzerAnalyzerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig">AccessanalyzerAnalyzerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putAnalyzerConfiguration">PutAnalyzerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putArchiveRules">PutArchiveRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetAnalyzerConfiguration">ResetAnalyzerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetAnalyzerName">ResetAnalyzerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetArchiveRules">ResetArchiveRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnalyzerConfiguration` <a name="PutAnalyzerConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putAnalyzerConfiguration"></a>

```go
func PutAnalyzerConfiguration(value AccessanalyzerAnalyzerAnalyzerConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putAnalyzerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerAnalyzerConfiguration</a>

---

##### `PutArchiveRules` <a name="PutArchiveRules" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putArchiveRules"></a>

```go
func PutArchiveRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putArchiveRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnalyzerConfiguration` <a name="ResetAnalyzerConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetAnalyzerConfiguration"></a>

```go
func ResetAnalyzerConfiguration()
```

##### `ResetAnalyzerName` <a name="ResetAnalyzerName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetAnalyzerName"></a>

```go
func ResetAnalyzerName()
```

##### `ResetArchiveRules` <a name="ResetArchiveRules" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetArchiveRules"></a>

```go
func ResetArchiveRules()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AccessanalyzerAnalyzer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.AccessanalyzerAnalyzer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.AccessanalyzerAnalyzer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.AccessanalyzerAnalyzer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.AccessanalyzerAnalyzer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AccessanalyzerAnalyzer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AccessanalyzerAnalyzer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AccessanalyzerAnalyzer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AccessanalyzerAnalyzer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerConfiguration">AnalyzerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.archiveRules">ArchiveRules</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList">AccessanalyzerAnalyzerArchiveRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList">AccessanalyzerAnalyzerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerConfigurationInput">AnalyzerConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerNameInput">AnalyzerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.archiveRulesInput">ArchiveRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerName">AnalyzerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnalyzerConfiguration`<sup>Required</sup> <a name="AnalyzerConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerConfiguration"></a>

```go
func AnalyzerConfiguration() AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference</a>

---

##### `ArchiveRules`<sup>Required</sup> <a name="ArchiveRules" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.archiveRules"></a>

```go
func ArchiveRules() AccessanalyzerAnalyzerArchiveRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList">AccessanalyzerAnalyzerArchiveRulesList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tags"></a>

```go
func Tags() AccessanalyzerAnalyzerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList">AccessanalyzerAnalyzerTagsList</a>

---

##### `AnalyzerConfigurationInput`<sup>Optional</sup> <a name="AnalyzerConfigurationInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerConfigurationInput"></a>

```go
func AnalyzerConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `AnalyzerNameInput`<sup>Optional</sup> <a name="AnalyzerNameInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerNameInput"></a>

```go
func AnalyzerNameInput() *string
```

- *Type:* *string

---

##### `ArchiveRulesInput`<sup>Optional</sup> <a name="ArchiveRulesInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.archiveRulesInput"></a>

```go
func ArchiveRulesInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AnalyzerName`<sup>Required</sup> <a name="AnalyzerName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerName"></a>

```go
func AnalyzerName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessanalyzerAnalyzerAnalyzerConfiguration <a name="AccessanalyzerAnalyzerAnalyzerConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

&accessanalyzeranalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration {
	InternalAccessConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration,
	UnusedAccessConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration.property.internalAccessConfiguration">InternalAccessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration</a></code> | Specifies the configuration of an internal access analyzer for an AWS organization or account. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration.property.unusedAccessConfiguration">UnusedAccessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration</a></code> | The Configuration for Unused Access Analyzer. |

---

##### `InternalAccessConfiguration`<sup>Optional</sup> <a name="InternalAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration.property.internalAccessConfiguration"></a>

```go
InternalAccessConfiguration AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration</a>

Specifies the configuration of an internal access analyzer for an AWS organization or account.

This configuration determines how the analyzer evaluates internal access within your AWS environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#internal_access_configuration AccessanalyzerAnalyzer#internal_access_configuration}

---

##### `UnusedAccessConfiguration`<sup>Optional</sup> <a name="UnusedAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration.property.unusedAccessConfiguration"></a>

```go
UnusedAccessConfiguration AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration</a>

The Configuration for Unused Access Analyzer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#unused_access_configuration AccessanalyzerAnalyzer#unused_access_configuration}

---

### AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration <a name="AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

&accessanalyzeranalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration {
	InternalAccessAnalysisRule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration.property.internalAccessAnalysisRule">InternalAccessAnalysisRule</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule</a></code> | Contains information about analysis rules for the internal access analyzer. |

---

##### `InternalAccessAnalysisRule`<sup>Optional</sup> <a name="InternalAccessAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration.property.internalAccessAnalysisRule"></a>

```go
InternalAccessAnalysisRule AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule</a>

Contains information about analysis rules for the internal access analyzer.

Analysis rules determine which entities will generate findings based on the criteria you define when you create the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#internal_access_analysis_rule AccessanalyzerAnalyzer#internal_access_analysis_rule}

---

### AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule <a name="AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

&accessanalyzeranalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule {
	Inclusions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule.property.inclusions">Inclusions</a></code> | <code>interface{}</code> | A list of rules for the internal access analyzer containing criteria to include in analysis. |

---

##### `Inclusions`<sup>Optional</sup> <a name="Inclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule.property.inclusions"></a>

```go
Inclusions interface{}
```

- *Type:* interface{}

A list of rules for the internal access analyzer containing criteria to include in analysis.

Only resources that meet the rule criteria will generate findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#inclusions AccessanalyzerAnalyzer#inclusions}

---

### AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions <a name="AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

&accessanalyzeranalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions {
	AccountIds: *[]*string,
	ResourceArns: *[]*string,
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | A list of AWS account IDs to apply to the internal access analysis rule criteria. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions.property.resourceArns">ResourceArns</a></code> | <code>*[]*string</code> | A list of resource ARNs to apply to the internal access analysis rule criteria. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | A list of resource types to apply to the internal access analysis rule criteria. |

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions.property.accountIds"></a>

```go
AccountIds *[]*string
```

- *Type:* *[]*string

A list of AWS account IDs to apply to the internal access analysis rule criteria.

Account IDs can only be applied to the analysis rule criteria for organization-level analyzers and cannot include the organization owner account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#account_ids AccessanalyzerAnalyzer#account_ids}

---

##### `ResourceArns`<sup>Optional</sup> <a name="ResourceArns" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions.property.resourceArns"></a>

```go
ResourceArns *[]*string
```

- *Type:* *[]*string

A list of resource ARNs to apply to the internal access analysis rule criteria.

The analyzer will only generate findings for resources that match these ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#resource_arns AccessanalyzerAnalyzer#resource_arns}

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusions.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

A list of resource types to apply to the internal access analysis rule criteria.

The analyzer will only generate findings for resources of these types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#resource_types AccessanalyzerAnalyzer#resource_types}

---

### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

&accessanalyzeranalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration {
	AnalysisRule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule,
	UnusedAccessAge: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration.property.analysisRule">AnalysisRule</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule</a></code> | Contains information about rules for the analyzer. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration.property.unusedAccessAge">UnusedAccessAge</a></code> | <code>*f64</code> | The specified access age in days for which to generate findings for unused access. |

---

##### `AnalysisRule`<sup>Optional</sup> <a name="AnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration.property.analysisRule"></a>

```go
AnalysisRule AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule</a>

Contains information about rules for the analyzer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#analysis_rule AccessanalyzerAnalyzer#analysis_rule}

---

##### `UnusedAccessAge`<sup>Optional</sup> <a name="UnusedAccessAge" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration.property.unusedAccessAge"></a>

```go
UnusedAccessAge *f64
```

- *Type:* *f64

The specified access age in days for which to generate findings for unused access.

For example, if you specify 90 days, the analyzer will generate findings for IAM entities within the accounts of the selected organization for any access that hasn't been used in 90 or more days since the analyzer's last scan. You can choose a value between 1 and 365 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#unused_access_age AccessanalyzerAnalyzer#unused_access_age}

---

### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

&accessanalyzeranalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule {
	Exclusions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule.property.exclusions">Exclusions</a></code> | <code>interface{}</code> | A list of rules for the analyzer containing criteria to exclude from analysis. |

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule.property.exclusions"></a>

```go
Exclusions interface{}
```

- *Type:* interface{}

A list of rules for the analyzer containing criteria to exclude from analysis.

Entities that meet the rule criteria will not generate findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#exclusions AccessanalyzerAnalyzer#exclusions}

---

### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

&accessanalyzeranalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions {
	AccountIds: *[]*string,
	ResourceTags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | A list of AWS account IDs to apply to the analysis rule criteria. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions.property.resourceTags">ResourceTags</a></code> | <code>interface{}</code> | An array of key-value pairs to match for your resources. |

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions.property.accountIds"></a>

```go
AccountIds *[]*string
```

- *Type:* *[]*string

A list of AWS account IDs to apply to the analysis rule criteria.

The accounts cannot include the organization analyzer owner account. Account IDs can only be applied to the analysis rule criteria for organization-level analyzers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#account_ids AccessanalyzerAnalyzer#account_ids}

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusions.property.resourceTags"></a>

```go
ResourceTags interface{}
```

- *Type:* interface{}

An array of key-value pairs to match for your resources.

You can use the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

For the tag key, you can specify a value that is 1 to 128 characters in length and cannot be prefixed with aws:.

For the tag value, you can specify a value that is 0 to 256 characters in length. If the specified tag value is 0 characters, the rule is applied to all principals with the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#resource_tags AccessanalyzerAnalyzer#resource_tags}

---

### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

&accessanalyzeranalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTags {

}
```


### AccessanalyzerAnalyzerArchiveRules <a name="AccessanalyzerAnalyzerArchiveRules" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

&accessanalyzeranalyzer.AccessanalyzerAnalyzerArchiveRules {
	Filter: interface{},
	RuleName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules.property.filter">Filter</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#filter AccessanalyzerAnalyzer#filter}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules.property.ruleName">RuleName</a></code> | <code>*string</code> | The archive rule name. |

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#filter AccessanalyzerAnalyzer#filter}.

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRules.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

The archive rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#rule_name AccessanalyzerAnalyzer#rule_name}

---

### AccessanalyzerAnalyzerArchiveRulesFilter <a name="AccessanalyzerAnalyzerArchiveRulesFilter" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

&accessanalyzeranalyzer.AccessanalyzerAnalyzerArchiveRulesFilter {
	Contains: *[]*string,
	Eq: *[]*string,
	Exists: interface{},
	Neq: *[]*string,
	Property: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.contains">Contains</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#contains AccessanalyzerAnalyzer#contains}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.eq">Eq</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#eq AccessanalyzerAnalyzer#eq}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.exists">Exists</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#exists AccessanalyzerAnalyzer#exists}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.neq">Neq</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#neq AccessanalyzerAnalyzer#neq}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.property">Property</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#property AccessanalyzerAnalyzer#property}. |

---

##### `Contains`<sup>Optional</sup> <a name="Contains" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.contains"></a>

```go
Contains *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#contains AccessanalyzerAnalyzer#contains}.

---

##### `Eq`<sup>Optional</sup> <a name="Eq" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.eq"></a>

```go
Eq *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#eq AccessanalyzerAnalyzer#eq}.

---

##### `Exists`<sup>Optional</sup> <a name="Exists" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.exists"></a>

```go
Exists interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#exists AccessanalyzerAnalyzer#exists}.

---

##### `Neq`<sup>Optional</sup> <a name="Neq" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.neq"></a>

```go
Neq *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#neq AccessanalyzerAnalyzer#neq}.

---

##### `Property`<sup>Optional</sup> <a name="Property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilter.property.property"></a>

```go
Property *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#property AccessanalyzerAnalyzer#property}.

---

### AccessanalyzerAnalyzerConfig <a name="AccessanalyzerAnalyzerConfig" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

&accessanalyzeranalyzer.AccessanalyzerAnalyzerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Type: *string,
	AnalyzerConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration,
	AnalyzerName: *string,
	ArchiveRules: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.type">Type</a></code> | <code>*string</code> | The type of the analyzer, must be one of ACCOUNT, ORGANIZATION, ACCOUNT_INTERNAL_ACCESS, ORGANIZATION_INTERNAL_ACCESS, ACCOUNT_UNUSED_ACCESS and ORGANIZATION_UNUSED_ACCESS. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.analyzerConfiguration">AnalyzerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerAnalyzerConfiguration</a></code> | The configuration for the analyzer. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.analyzerName">AnalyzerName</a></code> | <code>*string</code> | Analyzer name. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.archiveRules">ArchiveRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#archive_rules AccessanalyzerAnalyzer#archive_rules}. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the analyzer, must be one of ACCOUNT, ORGANIZATION, ACCOUNT_INTERNAL_ACCESS, ORGANIZATION_INTERNAL_ACCESS, ACCOUNT_UNUSED_ACCESS and ORGANIZATION_UNUSED_ACCESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#type AccessanalyzerAnalyzer#type}

---

##### `AnalyzerConfiguration`<sup>Optional</sup> <a name="AnalyzerConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.analyzerConfiguration"></a>

```go
AnalyzerConfiguration AccessanalyzerAnalyzerAnalyzerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfiguration">AccessanalyzerAnalyzerAnalyzerConfiguration</a>

The configuration for the analyzer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#analyzer_configuration AccessanalyzerAnalyzer#analyzer_configuration}

---

##### `AnalyzerName`<sup>Optional</sup> <a name="AnalyzerName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.analyzerName"></a>

```go
AnalyzerName *string
```

- *Type:* *string

Analyzer name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#analyzer_name AccessanalyzerAnalyzer#analyzer_name}

---

##### `ArchiveRules`<sup>Optional</sup> <a name="ArchiveRules" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.archiveRules"></a>

```go
ArchiveRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#archive_rules AccessanalyzerAnalyzer#archive_rules}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#tags AccessanalyzerAnalyzer#tags}

---

### AccessanalyzerAnalyzerTags <a name="AccessanalyzerAnalyzerTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

&accessanalyzeranalyzer.AccessanalyzerAnalyzerTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#key AccessanalyzerAnalyzer#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/accessanalyzer_analyzer#value AccessanalyzerAnalyzer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList <a name="AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.get"></a>

```go
func Get(index *f64) AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resetAccountIds">ResetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resetResourceArns">ResetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resetAccountIds"></a>

```go
func ResetAccountIds()
```

##### `ResetResourceArns` <a name="ResetResourceArns" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resetResourceArns"></a>

```go
func ResetResourceArns()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceArnsInput">ResourceArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceArns">ResourceArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.accountIdsInput"></a>

```go
func AccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceArnsInput`<sup>Optional</sup> <a name="ResourceArnsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceArnsInput"></a>

```go
func ResourceArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.accountIds"></a>

```go
func AccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceArns`<sup>Required</sup> <a name="ResourceArns" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceArns"></a>

```go
func ResourceArns() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.putInclusions">PutInclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.resetInclusions">ResetInclusions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInclusions` <a name="PutInclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.putInclusions"></a>

```go
func PutInclusions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.putInclusions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInclusions` <a name="ResetInclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.resetInclusions"></a>

```go
func ResetInclusions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.inclusions">Inclusions</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.inclusionsInput">InclusionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Inclusions`<sup>Required</sup> <a name="Inclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.inclusions"></a>

```go
func Inclusions() AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleInclusionsList</a>

---

##### `InclusionsInput`<sup>Optional</sup> <a name="InclusionsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.inclusionsInput"></a>

```go
func InclusionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.putInternalAccessAnalysisRule">PutInternalAccessAnalysisRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.resetInternalAccessAnalysisRule">ResetInternalAccessAnalysisRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternalAccessAnalysisRule` <a name="PutInternalAccessAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.putInternalAccessAnalysisRule"></a>

```go
func PutInternalAccessAnalysisRule(value AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.putInternalAccessAnalysisRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRule</a>

---

##### `ResetInternalAccessAnalysisRule` <a name="ResetInternalAccessAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.resetInternalAccessAnalysisRule"></a>

```go
func ResetInternalAccessAnalysisRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalAccessAnalysisRule">InternalAccessAnalysisRule</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalAccessAnalysisRuleInput">InternalAccessAnalysisRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalAccessAnalysisRule`<sup>Required</sup> <a name="InternalAccessAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalAccessAnalysisRule"></a>

```go
func InternalAccessAnalysisRule() AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationInternalAccessAnalysisRuleOutputReference</a>

---

##### `InternalAccessAnalysisRuleInput`<sup>Optional</sup> <a name="InternalAccessAnalysisRuleInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalAccessAnalysisRuleInput"></a>

```go
func InternalAccessAnalysisRuleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerAnalyzerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.putInternalAccessConfiguration">PutInternalAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.putUnusedAccessConfiguration">PutUnusedAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resetInternalAccessConfiguration">ResetInternalAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resetUnusedAccessConfiguration">ResetUnusedAccessConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternalAccessConfiguration` <a name="PutInternalAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.putInternalAccessConfiguration"></a>

```go
func PutInternalAccessConfiguration(value AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.putInternalAccessConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfiguration</a>

---

##### `PutUnusedAccessConfiguration` <a name="PutUnusedAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.putUnusedAccessConfiguration"></a>

```go
func PutUnusedAccessConfiguration(value AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.putUnusedAccessConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfiguration</a>

---

##### `ResetInternalAccessConfiguration` <a name="ResetInternalAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resetInternalAccessConfiguration"></a>

```go
func ResetInternalAccessConfiguration()
```

##### `ResetUnusedAccessConfiguration` <a name="ResetUnusedAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.resetUnusedAccessConfiguration"></a>

```go
func ResetUnusedAccessConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalAccessConfiguration">InternalAccessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.unusedAccessConfiguration">UnusedAccessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalAccessConfigurationInput">InternalAccessConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.unusedAccessConfigurationInput">UnusedAccessConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalAccessConfiguration`<sup>Required</sup> <a name="InternalAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalAccessConfiguration"></a>

```go
func InternalAccessConfiguration() AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationInternalAccessConfigurationOutputReference</a>

---

##### `UnusedAccessConfiguration`<sup>Required</sup> <a name="UnusedAccessConfiguration" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.unusedAccessConfiguration"></a>

```go
func UnusedAccessConfiguration() AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference</a>

---

##### `InternalAccessConfigurationInput`<sup>Optional</sup> <a name="InternalAccessConfigurationInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalAccessConfigurationInput"></a>

```go
func InternalAccessConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `UnusedAccessConfigurationInput`<sup>Optional</sup> <a name="UnusedAccessConfigurationInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.unusedAccessConfigurationInput"></a>

```go
func UnusedAccessConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.get"></a>

```go
func Get(index *f64) AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.putResourceTags">PutResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resetAccountIds">ResetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resetResourceTags">ResetResourceTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceTags` <a name="PutResourceTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.putResourceTags"></a>

```go
func PutResourceTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.putResourceTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resetAccountIds"></a>

```go
func ResetAccountIds()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.resetResourceTags"></a>

```go
func ResetResourceTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.resourceTags">ResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.resourceTags"></a>

```go
func ResourceTags() AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList</a>

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.accountIdsInput"></a>

```go
func AccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.resourceTagsInput"></a>

```go
func ResourceTagsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.accountIds"></a>

```go
func AccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.get"></a>

```go
func Get(index *f64) AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsResourceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.putExclusions">PutExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusions` <a name="PutExclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.putExclusions"></a>

```go
func PutExclusions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.putExclusions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.exclusions">Exclusions</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.exclusions"></a>

```go
func Exclusions() AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleExclusionsList</a>

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference <a name="AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.putAnalysisRule">PutAnalysisRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resetAnalysisRule">ResetAnalysisRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resetUnusedAccessAge">ResetUnusedAccessAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnalysisRule` <a name="PutAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.putAnalysisRule"></a>

```go
func PutAnalysisRule(value AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.putAnalysisRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRule</a>

---

##### `ResetAnalysisRule` <a name="ResetAnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resetAnalysisRule"></a>

```go
func ResetAnalysisRule()
```

##### `ResetUnusedAccessAge` <a name="ResetUnusedAccessAge" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.resetUnusedAccessAge"></a>

```go
func ResetUnusedAccessAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.analysisRule">AnalysisRule</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.analysisRuleInput">AnalysisRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.unusedAccessAgeInput">UnusedAccessAgeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.unusedAccessAge">UnusedAccessAge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnalysisRule`<sup>Required</sup> <a name="AnalysisRule" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.analysisRule"></a>

```go
func AnalysisRule() AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference">AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationAnalysisRuleOutputReference</a>

---

##### `AnalysisRuleInput`<sup>Optional</sup> <a name="AnalysisRuleInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.analysisRuleInput"></a>

```go
func AnalysisRuleInput() interface{}
```

- *Type:* interface{}

---

##### `UnusedAccessAgeInput`<sup>Optional</sup> <a name="UnusedAccessAgeInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.unusedAccessAgeInput"></a>

```go
func UnusedAccessAgeInput() *f64
```

- *Type:* *f64

---

##### `UnusedAccessAge`<sup>Required</sup> <a name="UnusedAccessAge" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.unusedAccessAge"></a>

```go
func UnusedAccessAge() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerAnalyzerConfigurationUnusedAccessConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerArchiveRulesFilterList <a name="AccessanalyzerAnalyzerArchiveRulesFilterList" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerArchiveRulesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessanalyzerAnalyzerArchiveRulesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.get"></a>

```go
func Get(index *f64) AccessanalyzerAnalyzerArchiveRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerArchiveRulesFilterOutputReference <a name="AccessanalyzerAnalyzerArchiveRulesFilterOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerArchiveRulesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessanalyzerAnalyzerArchiveRulesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetContains">ResetContains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetEq">ResetEq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetExists">ResetExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetNeq">ResetNeq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetProperty">ResetProperty</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContains` <a name="ResetContains" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetContains"></a>

```go
func ResetContains()
```

##### `ResetEq` <a name="ResetEq" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetEq"></a>

```go
func ResetEq()
```

##### `ResetExists` <a name="ResetExists" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetExists"></a>

```go
func ResetExists()
```

##### `ResetNeq` <a name="ResetNeq" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetNeq"></a>

```go
func ResetNeq()
```

##### `ResetProperty` <a name="ResetProperty" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.resetProperty"></a>

```go
func ResetProperty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.containsInput">ContainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.eqInput">EqInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.existsInput">ExistsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.neqInput">NeqInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.propertyInput">PropertyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.contains">Contains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.eq">Eq</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.exists">Exists</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.neq">Neq</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.property">Property</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainsInput`<sup>Optional</sup> <a name="ContainsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.containsInput"></a>

```go
func ContainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EqInput`<sup>Optional</sup> <a name="EqInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.eqInput"></a>

```go
func EqInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExistsInput`<sup>Optional</sup> <a name="ExistsInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.existsInput"></a>

```go
func ExistsInput() interface{}
```

- *Type:* interface{}

---

##### `NeqInput`<sup>Optional</sup> <a name="NeqInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.neqInput"></a>

```go
func NeqInput() *[]*string
```

- *Type:* *[]*string

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.propertyInput"></a>

```go
func PropertyInput() *string
```

- *Type:* *string

---

##### `Contains`<sup>Required</sup> <a name="Contains" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.contains"></a>

```go
func Contains() *[]*string
```

- *Type:* *[]*string

---

##### `Eq`<sup>Required</sup> <a name="Eq" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.eq"></a>

```go
func Eq() *[]*string
```

- *Type:* *[]*string

---

##### `Exists`<sup>Required</sup> <a name="Exists" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.exists"></a>

```go
func Exists() interface{}
```

- *Type:* interface{}

---

##### `Neq`<sup>Required</sup> <a name="Neq" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.neq"></a>

```go
func Neq() *[]*string
```

- *Type:* *[]*string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.property"></a>

```go
func Property() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerArchiveRulesList <a name="AccessanalyzerAnalyzerArchiveRulesList" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerArchiveRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessanalyzerAnalyzerArchiveRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.get"></a>

```go
func Get(index *f64) AccessanalyzerAnalyzerArchiveRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerArchiveRulesOutputReference <a name="AccessanalyzerAnalyzerArchiveRulesOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerArchiveRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessanalyzerAnalyzerArchiveRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.resetRuleName">ResetRuleName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.resetRuleName"></a>

```go
func ResetRuleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList">AccessanalyzerAnalyzerArchiveRulesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.filter"></a>

```go
func Filter() AccessanalyzerAnalyzerArchiveRulesFilterList
```

- *Type:* <a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesFilterList">AccessanalyzerAnalyzerArchiveRulesFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerArchiveRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerTagsList <a name="AccessanalyzerAnalyzerTagsList" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AccessanalyzerAnalyzerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.get"></a>

```go
func Get(index *f64) AccessanalyzerAnalyzerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AccessanalyzerAnalyzerTagsOutputReference <a name="AccessanalyzerAnalyzerTagsOutputReference" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/accessanalyzeranalyzer"

accessanalyzeranalyzer.NewAccessanalyzerAnalyzerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AccessanalyzerAnalyzerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.accessanalyzerAnalyzer.AccessanalyzerAnalyzerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



