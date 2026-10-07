# `licensemanagerReportGenerator` Submodule <a name="`licensemanagerReportGenerator` Submodule" id="@cdktn/provider-awscc.licensemanagerReportGenerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicensemanagerReportGenerator <a name="LicensemanagerReportGenerator" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator awscc_licensemanager_report_generator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerreportgenerator"

licensemanagerreportgenerator.NewLicensemanagerReportGenerator(scope Construct, id *string, config LicensemanagerReportGeneratorConfig) LicensemanagerReportGenerator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig">LicensemanagerReportGeneratorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig">LicensemanagerReportGeneratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext">PutReportContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency">PutReportFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReportContext` <a name="PutReportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext"></a>

```go
func PutReportContext(value LicensemanagerReportGeneratorReportContext)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

---

##### `PutReportFrequency` <a name="PutReportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency"></a>

```go
func PutReportFrequency(value LicensemanagerReportGeneratorReportFrequency)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putReportFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LicensemanagerReportGenerator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerreportgenerator"

licensemanagerreportgenerator.LicensemanagerReportGenerator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerreportgenerator"

licensemanagerreportgenerator.LicensemanagerReportGenerator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerreportgenerator"

licensemanagerreportgenerator.LicensemanagerReportGenerator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerreportgenerator"

licensemanagerreportgenerator.LicensemanagerReportGenerator_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LicensemanagerReportGenerator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LicensemanagerReportGenerator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LicensemanagerReportGenerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LicensemanagerReportGenerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContext">ReportContext</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference">LicensemanagerReportGeneratorReportContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportCreatorAccount">ReportCreatorAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequency">ReportFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference">LicensemanagerReportGeneratorReportFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference">LicensemanagerReportGeneratorS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList">LicensemanagerReportGeneratorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContextInput">ReportContextInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequencyInput">ReportFrequencyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorNameInput">ReportGeneratorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportTypeInput">ReportTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorName">ReportGeneratorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportType">ReportType</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReportContext`<sup>Required</sup> <a name="ReportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContext"></a>

```go
func ReportContext() LicensemanagerReportGeneratorReportContextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference">LicensemanagerReportGeneratorReportContextOutputReference</a>

---

##### `ReportCreatorAccount`<sup>Required</sup> <a name="ReportCreatorAccount" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportCreatorAccount"></a>

```go
func ReportCreatorAccount() *string
```

- *Type:* *string

---

##### `ReportFrequency`<sup>Required</sup> <a name="ReportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequency"></a>

```go
func ReportFrequency() LicensemanagerReportGeneratorReportFrequencyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference">LicensemanagerReportGeneratorReportFrequencyOutputReference</a>

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.s3Location"></a>

```go
func S3Location() LicensemanagerReportGeneratorS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference">LicensemanagerReportGeneratorS3LocationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tags"></a>

```go
func Tags() LicensemanagerReportGeneratorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList">LicensemanagerReportGeneratorTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ReportContextInput`<sup>Optional</sup> <a name="ReportContextInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportContextInput"></a>

```go
func ReportContextInput() interface{}
```

- *Type:* interface{}

---

##### `ReportFrequencyInput`<sup>Optional</sup> <a name="ReportFrequencyInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportFrequencyInput"></a>

```go
func ReportFrequencyInput() interface{}
```

- *Type:* interface{}

---

##### `ReportGeneratorNameInput`<sup>Optional</sup> <a name="ReportGeneratorNameInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorNameInput"></a>

```go
func ReportGeneratorNameInput() *string
```

- *Type:* *string

---

##### `ReportTypeInput`<sup>Optional</sup> <a name="ReportTypeInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportTypeInput"></a>

```go
func ReportTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ReportGeneratorName`<sup>Required</sup> <a name="ReportGeneratorName" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportGeneratorName"></a>

```go
func ReportGeneratorName() *string
```

- *Type:* *string

---

##### `ReportType`<sup>Required</sup> <a name="ReportType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.reportType"></a>

```go
func ReportType() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGenerator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LicensemanagerReportGeneratorConfig <a name="LicensemanagerReportGeneratorConfig" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerreportgenerator"

&licensemanagerreportgenerator.LicensemanagerReportGeneratorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ReportContext: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext,
	ReportFrequency: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency,
	ReportGeneratorName: *string,
	ReportType: *[]*string,
	Description: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportContext">ReportContext</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a></code> | Details of the license configurations and asset groups that this generator reports on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportFrequency">ReportFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a></code> | Details about how frequently reports are generated. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportGeneratorName">ReportGeneratorName</a></code> | <code>*string</code> | Name of the report generator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportType">ReportType</a></code> | <code>*[]*string</code> | Type of reports to generate. The report type determines the data reported on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.description">Description</a></code> | <code>*string</code> | Description of the report generator. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ReportContext`<sup>Required</sup> <a name="ReportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportContext"></a>

```go
ReportContext LicensemanagerReportGeneratorReportContext
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext">LicensemanagerReportGeneratorReportContext</a>

Details of the license configurations and asset groups that this generator reports on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_context LicensemanagerReportGenerator#report_context}

---

##### `ReportFrequency`<sup>Required</sup> <a name="ReportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportFrequency"></a>

```go
ReportFrequency LicensemanagerReportGeneratorReportFrequency
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency">LicensemanagerReportGeneratorReportFrequency</a>

Details about how frequently reports are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_frequency LicensemanagerReportGenerator#report_frequency}

---

##### `ReportGeneratorName`<sup>Required</sup> <a name="ReportGeneratorName" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportGeneratorName"></a>

```go
ReportGeneratorName *string
```

- *Type:* *string

Name of the report generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_generator_name LicensemanagerReportGenerator#report_generator_name}

---

##### `ReportType`<sup>Required</sup> <a name="ReportType" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.reportType"></a>

```go
ReportType *[]*string
```

- *Type:* *[]*string

Type of reports to generate. The report type determines the data reported on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_type LicensemanagerReportGenerator#report_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the report generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#description LicensemanagerReportGenerator#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#tags LicensemanagerReportGenerator#tags}

---

### LicensemanagerReportGeneratorReportContext <a name="LicensemanagerReportGeneratorReportContext" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerreportgenerator"

&licensemanagerreportgenerator.LicensemanagerReportGeneratorReportContext {
	LicenseAssetGroupArns: *[]*string,
	LicenseConfigurationArns: *[]*string,
	ReportEndDate: *string,
	ReportStartDate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseAssetGroupArns">LicenseAssetGroupArns</a></code> | <code>*[]*string</code> | Amazon Resource Names (ARNs) of the license asset groups to include in the report. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseConfigurationArns">LicenseConfigurationArns</a></code> | <code>*[]*string</code> | Amazon Resource Names (ARNs) of the license configurations that this generator reports on. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportEndDate">ReportEndDate</a></code> | <code>*string</code> | End date for the report data collection period. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportStartDate">ReportStartDate</a></code> | <code>*string</code> | Start date for the report data collection period. |

---

##### `LicenseAssetGroupArns`<sup>Optional</sup> <a name="LicenseAssetGroupArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseAssetGroupArns"></a>

```go
LicenseAssetGroupArns *[]*string
```

- *Type:* *[]*string

Amazon Resource Names (ARNs) of the license asset groups to include in the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#license_asset_group_arns LicensemanagerReportGenerator#license_asset_group_arns}

---

##### `LicenseConfigurationArns`<sup>Optional</sup> <a name="LicenseConfigurationArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.licenseConfigurationArns"></a>

```go
LicenseConfigurationArns *[]*string
```

- *Type:* *[]*string

Amazon Resource Names (ARNs) of the license configurations that this generator reports on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#license_configuration_arns LicensemanagerReportGenerator#license_configuration_arns}

---

##### `ReportEndDate`<sup>Optional</sup> <a name="ReportEndDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportEndDate"></a>

```go
ReportEndDate *string
```

- *Type:* *string

End date for the report data collection period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_end_date LicensemanagerReportGenerator#report_end_date}

---

##### `ReportStartDate`<sup>Optional</sup> <a name="ReportStartDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContext.property.reportStartDate"></a>

```go
ReportStartDate *string
```

- *Type:* *string

Start date for the report data collection period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#report_start_date LicensemanagerReportGenerator#report_start_date}

---

### LicensemanagerReportGeneratorReportFrequency <a name="LicensemanagerReportGeneratorReportFrequency" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerreportgenerator"

&licensemanagerreportgenerator.LicensemanagerReportGeneratorReportFrequency {
	Period: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.period">Period</a></code> | <code>*string</code> | Time period between each report. The period can be daily, weekly, or monthly. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.value">Value</a></code> | <code>*f64</code> | Number of times within the frequency period that a report is generated. The only supported value is 1. |

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.period"></a>

```go
Period *string
```

- *Type:* *string

Time period between each report. The period can be daily, weekly, or monthly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#period LicensemanagerReportGenerator#period}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequency.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Number of times within the frequency period that a report is generated. The only supported value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#value LicensemanagerReportGenerator#value}

---

### LicensemanagerReportGeneratorS3Location <a name="LicensemanagerReportGeneratorS3Location" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerreportgenerator"

&licensemanagerreportgenerator.LicensemanagerReportGeneratorS3Location {

}
```


### LicensemanagerReportGeneratorTags <a name="LicensemanagerReportGeneratorTags" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerreportgenerator"

&licensemanagerreportgenerator.LicensemanagerReportGeneratorTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#key LicensemanagerReportGenerator#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/licensemanager_report_generator#value LicensemanagerReportGenerator#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LicensemanagerReportGeneratorReportContextOutputReference <a name="LicensemanagerReportGeneratorReportContextOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerreportgenerator"

licensemanagerreportgenerator.NewLicensemanagerReportGeneratorReportContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerReportGeneratorReportContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseAssetGroupArns">ResetLicenseAssetGroupArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseConfigurationArns">ResetLicenseConfigurationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportEndDate">ResetReportEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportStartDate">ResetReportStartDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLicenseAssetGroupArns` <a name="ResetLicenseAssetGroupArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseAssetGroupArns"></a>

```go
func ResetLicenseAssetGroupArns()
```

##### `ResetLicenseConfigurationArns` <a name="ResetLicenseConfigurationArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetLicenseConfigurationArns"></a>

```go
func ResetLicenseConfigurationArns()
```

##### `ResetReportEndDate` <a name="ResetReportEndDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportEndDate"></a>

```go
func ResetReportEndDate()
```

##### `ResetReportStartDate` <a name="ResetReportStartDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.resetReportStartDate"></a>

```go
func ResetReportStartDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArnsInput">LicenseAssetGroupArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArnsInput">LicenseConfigurationArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDateInput">ReportEndDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDateInput">ReportStartDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArns">LicenseAssetGroupArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArns">LicenseConfigurationArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDate">ReportEndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDate">ReportStartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LicenseAssetGroupArnsInput`<sup>Optional</sup> <a name="LicenseAssetGroupArnsInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArnsInput"></a>

```go
func LicenseAssetGroupArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LicenseConfigurationArnsInput`<sup>Optional</sup> <a name="LicenseConfigurationArnsInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArnsInput"></a>

```go
func LicenseConfigurationArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReportEndDateInput`<sup>Optional</sup> <a name="ReportEndDateInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDateInput"></a>

```go
func ReportEndDateInput() *string
```

- *Type:* *string

---

##### `ReportStartDateInput`<sup>Optional</sup> <a name="ReportStartDateInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDateInput"></a>

```go
func ReportStartDateInput() *string
```

- *Type:* *string

---

##### `LicenseAssetGroupArns`<sup>Required</sup> <a name="LicenseAssetGroupArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseAssetGroupArns"></a>

```go
func LicenseAssetGroupArns() *[]*string
```

- *Type:* *[]*string

---

##### `LicenseConfigurationArns`<sup>Required</sup> <a name="LicenseConfigurationArns" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.licenseConfigurationArns"></a>

```go
func LicenseConfigurationArns() *[]*string
```

- *Type:* *[]*string

---

##### `ReportEndDate`<sup>Required</sup> <a name="ReportEndDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportEndDate"></a>

```go
func ReportEndDate() *string
```

- *Type:* *string

---

##### `ReportStartDate`<sup>Required</sup> <a name="ReportStartDate" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.reportStartDate"></a>

```go
func ReportStartDate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportContextOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerReportGeneratorReportFrequencyOutputReference <a name="LicensemanagerReportGeneratorReportFrequencyOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerreportgenerator"

licensemanagerreportgenerator.NewLicensemanagerReportGeneratorReportFrequencyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerReportGeneratorReportFrequencyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.periodInput">PeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.period">Period</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.periodInput"></a>

```go
func PeriodInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.period"></a>

```go
func Period() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorReportFrequencyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerReportGeneratorS3LocationOutputReference <a name="LicensemanagerReportGeneratorS3LocationOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerreportgenerator"

licensemanagerreportgenerator.NewLicensemanagerReportGeneratorS3LocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicensemanagerReportGeneratorS3LocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location">LicensemanagerReportGeneratorS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.keyPrefix"></a>

```go
func KeyPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3LocationOutputReference.property.internalValue"></a>

```go
func InternalValue() LicensemanagerReportGeneratorS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorS3Location">LicensemanagerReportGeneratorS3Location</a>

---


### LicensemanagerReportGeneratorTagsList <a name="LicensemanagerReportGeneratorTagsList" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerreportgenerator"

licensemanagerreportgenerator.NewLicensemanagerReportGeneratorTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicensemanagerReportGeneratorTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.get"></a>

```go
func Get(index *f64) LicensemanagerReportGeneratorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicensemanagerReportGeneratorTagsOutputReference <a name="LicensemanagerReportGeneratorTagsOutputReference" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/licensemanagerreportgenerator"

licensemanagerreportgenerator.NewLicensemanagerReportGeneratorTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicensemanagerReportGeneratorTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.licensemanagerReportGenerator.LicensemanagerReportGeneratorTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



