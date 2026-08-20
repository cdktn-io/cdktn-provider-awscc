# `apptestTestCase` Submodule <a name="`apptestTestCase` Submodule" id="@cdktn/provider-awscc.apptestTestCase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApptestTestCase <a name="ApptestTestCase" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case awscc_apptest_test_case}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCase(scope Construct, id *string, config ApptestTestCaseConfig) ApptestTestCase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig">ApptestTestCaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig">ApptestTestCaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSteps` <a name="PutSteps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.putSteps"></a>

```go
func PutSteps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.putSteps.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApptestTestCase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.ApptestTestCase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.ApptestTestCase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.ApptestTestCase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.ApptestTestCase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApptestTestCase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApptestTestCase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApptestTestCase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApptestTestCase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lastUpdateTime">LastUpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.latestVersion">LatestVersion</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference">ApptestTestCaseLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.steps">Steps</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList">ApptestTestCaseStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseArn">TestCaseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseId">TestCaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseVersion">TestCaseVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.stepsInput">StepsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lastUpdateTime"></a>

```go
func LastUpdateTime() *string
```

- *Type:* *string

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.latestVersion"></a>

```go
func LatestVersion() ApptestTestCaseLatestVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference">ApptestTestCaseLatestVersionOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.steps"></a>

```go
func Steps() ApptestTestCaseStepsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList">ApptestTestCaseStepsList</a>

---

##### `TestCaseArn`<sup>Required</sup> <a name="TestCaseArn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseArn"></a>

```go
func TestCaseArn() *string
```

- *Type:* *string

---

##### `TestCaseId`<sup>Required</sup> <a name="TestCaseId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseId"></a>

```go
func TestCaseId() *string
```

- *Type:* *string

---

##### `TestCaseVersion`<sup>Required</sup> <a name="TestCaseVersion" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseVersion"></a>

```go
func TestCaseVersion() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.stepsInput"></a>

```go
func StepsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApptestTestCaseConfig <a name="ApptestTestCaseConfig" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Steps: interface{},
	Description: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#name ApptestTestCase#name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.steps">Steps</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#steps ApptestTestCase#steps}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#description ApptestTestCase#description}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#tags ApptestTestCase#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#name ApptestTestCase#name}.

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.steps"></a>

```go
Steps interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#steps ApptestTestCase#steps}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#description ApptestTestCase#description}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#tags ApptestTestCase#tags}.

---

### ApptestTestCaseLatestVersion <a name="ApptestTestCaseLatestVersion" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseLatestVersion {

}
```


### ApptestTestCaseSteps <a name="ApptestTestCaseSteps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseSteps {
	Action: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsAction,
	Name: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action ApptestTestCase#action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#name ApptestTestCase#name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#description ApptestTestCase#description}. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.action"></a>

```go
Action ApptestTestCaseStepsAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action ApptestTestCase#action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#name ApptestTestCase#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#description ApptestTestCase#description}.

---

### ApptestTestCaseStepsAction <a name="ApptestTestCaseStepsAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsAction {
	CompareAction: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction,
	MainframeAction: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction,
	ResourceAction: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.compareAction">CompareAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#compare_action ApptestTestCase#compare_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.mainframeAction">MainframeAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#mainframe_action ApptestTestCase#mainframe_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.resourceAction">ResourceAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource_action ApptestTestCase#resource_action}. |

---

##### `CompareAction`<sup>Optional</sup> <a name="CompareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.compareAction"></a>

```go
CompareAction ApptestTestCaseStepsActionCompareAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#compare_action ApptestTestCase#compare_action}.

---

##### `MainframeAction`<sup>Optional</sup> <a name="MainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.mainframeAction"></a>

```go
MainframeAction ApptestTestCaseStepsActionMainframeAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#mainframe_action ApptestTestCase#mainframe_action}.

---

##### `ResourceAction`<sup>Optional</sup> <a name="ResourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.resourceAction"></a>

```go
ResourceAction ApptestTestCaseStepsActionResourceAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource_action ApptestTestCase#resource_action}.

---

### ApptestTestCaseStepsActionCompareAction <a name="ApptestTestCaseStepsActionCompareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionCompareAction {
	Input: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput,
	Output: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.input">Input</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#input ApptestTestCase#input}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.output">Output</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#output ApptestTestCase#output}. |

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.input"></a>

```go
Input ApptestTestCaseStepsActionCompareActionInput
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#input ApptestTestCase#input}.

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.output"></a>

```go
Output ApptestTestCaseStepsActionCompareActionOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#output ApptestTestCase#output}.

---

### ApptestTestCaseStepsActionCompareActionInput <a name="ApptestTestCaseStepsActionCompareActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionCompareActionInput {
	File: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput.property.file">File</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file ApptestTestCase#file}. |

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput.property.file"></a>

```go
File ApptestTestCaseStepsActionCompareActionInputFile
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file ApptestTestCase#file}.

---

### ApptestTestCaseStepsActionCompareActionInputFile <a name="ApptestTestCaseStepsActionCompareActionInputFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionCompareActionInputFile {
	FileMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata,
	SourceLocation: *string,
	TargetLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.fileMetadata">FileMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file_metadata ApptestTestCase#file_metadata}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.sourceLocation">SourceLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#source_location ApptestTestCase#source_location}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.targetLocation">TargetLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#target_location ApptestTestCase#target_location}. |

---

##### `FileMetadata`<sup>Optional</sup> <a name="FileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.fileMetadata"></a>

```go
FileMetadata ApptestTestCaseStepsActionCompareActionInputFileFileMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file_metadata ApptestTestCase#file_metadata}.

---

##### `SourceLocation`<sup>Optional</sup> <a name="SourceLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.sourceLocation"></a>

```go
SourceLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#source_location ApptestTestCase#source_location}.

---

##### `TargetLocation`<sup>Optional</sup> <a name="TargetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.targetLocation"></a>

```go
TargetLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#target_location ApptestTestCase#target_location}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadata <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata {
	DatabaseCdc: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc,
	DataSets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.databaseCdc">DatabaseCdc</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#database_cdc ApptestTestCase#database_cdc}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.dataSets">DataSets</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#data_sets ApptestTestCase#data_sets}. |

---

##### `DatabaseCdc`<sup>Optional</sup> <a name="DatabaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.databaseCdc"></a>

```go
DatabaseCdc ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#database_cdc ApptestTestCase#database_cdc}.

---

##### `DataSets`<sup>Optional</sup> <a name="DataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.dataSets"></a>

```go
DataSets interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#data_sets ApptestTestCase#data_sets}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc {
	SourceMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata,
	TargetMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.sourceMetadata">SourceMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#source_metadata ApptestTestCase#source_metadata}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.targetMetadata">TargetMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#target_metadata ApptestTestCase#target_metadata}. |

---

##### `SourceMetadata`<sup>Optional</sup> <a name="SourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.sourceMetadata"></a>

```go
SourceMetadata ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#source_metadata ApptestTestCase#source_metadata}.

---

##### `TargetMetadata`<sup>Optional</sup> <a name="TargetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.targetMetadata"></a>

```go
TargetMetadata ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#target_metadata ApptestTestCase#target_metadata}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata {
	CaptureTool: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.captureTool">CaptureTool</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `CaptureTool`<sup>Optional</sup> <a name="CaptureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.captureTool"></a>

```go
CaptureTool *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata {
	CaptureTool: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.captureTool">CaptureTool</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `CaptureTool`<sup>Optional</sup> <a name="CaptureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.captureTool"></a>

```go
CaptureTool *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets {
	Ccsid: *string,
	Format: *string,
	Length: *f64,
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.ccsid">Ccsid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#ccsid ApptestTestCase#ccsid}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#format ApptestTestCase#format}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.length">Length</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#length ApptestTestCase#length}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#name ApptestTestCase#name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `Ccsid`<sup>Optional</sup> <a name="Ccsid" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.ccsid"></a>

```go
Ccsid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#ccsid ApptestTestCase#ccsid}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#format ApptestTestCase#format}.

---

##### `Length`<sup>Optional</sup> <a name="Length" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.length"></a>

```go
Length *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#length ApptestTestCase#length}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#name ApptestTestCase#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionCompareActionOutput <a name="ApptestTestCaseStepsActionCompareActionOutput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionCompareActionOutput {
	File: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput.property.file">File</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file ApptestTestCase#file}. |

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput.property.file"></a>

```go
File ApptestTestCaseStepsActionCompareActionOutputFile
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file ApptestTestCase#file}.

---

### ApptestTestCaseStepsActionCompareActionOutputFile <a name="ApptestTestCaseStepsActionCompareActionOutputFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionCompareActionOutputFile {
	FileLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile.property.fileLocation">FileLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file_location ApptestTestCase#file_location}. |

---

##### `FileLocation`<sup>Optional</sup> <a name="FileLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile.property.fileLocation"></a>

```go
FileLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#file_location ApptestTestCase#file_location}.

---

### ApptestTestCaseStepsActionMainframeAction <a name="ApptestTestCaseStepsActionMainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionMainframeAction {
	ActionType: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType,
	Properties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.actionType">ActionType</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.resource">Resource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `ActionType`<sup>Optional</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.actionType"></a>

```go
ActionType ApptestTestCaseStepsActionMainframeActionActionType
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.properties"></a>

```go
Properties ApptestTestCaseStepsActionMainframeActionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

### ApptestTestCaseStepsActionMainframeActionActionType <a name="ApptestTestCaseStepsActionMainframeActionActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionMainframeActionActionType {
	Batch: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch,
	Tn3270: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.batch">Batch</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#batch ApptestTestCase#batch}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.tn3270">Tn3270</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#tn_3270 ApptestTestCase#tn_3270}. |

---

##### `Batch`<sup>Optional</sup> <a name="Batch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.batch"></a>

```go
Batch ApptestTestCaseStepsActionMainframeActionActionTypeBatch
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#batch ApptestTestCase#batch}.

---

##### `Tn3270`<sup>Optional</sup> <a name="Tn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.tn3270"></a>

```go
Tn3270 ApptestTestCaseStepsActionMainframeActionActionTypeTn3270
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#tn_3270 ApptestTestCase#tn_3270}.

---

### ApptestTestCaseStepsActionMainframeActionActionTypeBatch <a name="ApptestTestCaseStepsActionMainframeActionActionTypeBatch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch {
	BatchJobName: *string,
	BatchJobParameters: *map[string]*string,
	ExportDataSetNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobName">BatchJobName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#batch_job_name ApptestTestCase#batch_job_name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobParameters">BatchJobParameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#batch_job_parameters ApptestTestCase#batch_job_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.exportDataSetNames">ExportDataSetNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}. |

---

##### `BatchJobName`<sup>Optional</sup> <a name="BatchJobName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobName"></a>

```go
BatchJobName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#batch_job_name ApptestTestCase#batch_job_name}.

---

##### `BatchJobParameters`<sup>Optional</sup> <a name="BatchJobParameters" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobParameters"></a>

```go
BatchJobParameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#batch_job_parameters ApptestTestCase#batch_job_parameters}.

---

##### `ExportDataSetNames`<sup>Optional</sup> <a name="ExportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.exportDataSetNames"></a>

```go
ExportDataSetNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}.

---

### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 {
	ExportDataSetNames: *[]*string,
	Script: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.exportDataSetNames">ExportDataSetNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.script">Script</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#script ApptestTestCase#script}. |

---

##### `ExportDataSetNames`<sup>Optional</sup> <a name="ExportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.exportDataSetNames"></a>

```go
ExportDataSetNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}.

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.script"></a>

```go
Script ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#script ApptestTestCase#script}.

---

### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script {
	ScriptLocation: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.scriptLocation">ScriptLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#script_location ApptestTestCase#script_location}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `ScriptLocation`<sup>Optional</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.scriptLocation"></a>

```go
ScriptLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#script_location ApptestTestCase#script_location}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionMainframeActionProperties <a name="ApptestTestCaseStepsActionMainframeActionProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionMainframeActionProperties {
	DmsTaskArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties.property.dmsTaskArn">DmsTaskArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#dms_task_arn ApptestTestCase#dms_task_arn}. |

---

##### `DmsTaskArn`<sup>Optional</sup> <a name="DmsTaskArn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties.property.dmsTaskArn"></a>

```go
DmsTaskArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#dms_task_arn ApptestTestCase#dms_task_arn}.

---

### ApptestTestCaseStepsActionResourceAction <a name="ApptestTestCaseStepsActionResourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionResourceAction {
	CloudformationAction: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction,
	M2ManagedApplicationAction: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction,
	M2NonManagedApplicationAction: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.cloudformationAction">CloudformationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#cloudformation_action ApptestTestCase#cloudformation_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2ManagedApplicationAction">M2ManagedApplicationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#m2_managed_application_action ApptestTestCase#m2_managed_application_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2NonManagedApplicationAction">M2NonManagedApplicationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#m2_non_managed_application_action ApptestTestCase#m2_non_managed_application_action}. |

---

##### `CloudformationAction`<sup>Optional</sup> <a name="CloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.cloudformationAction"></a>

```go
CloudformationAction ApptestTestCaseStepsActionResourceActionCloudformationAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#cloudformation_action ApptestTestCase#cloudformation_action}.

---

##### `M2ManagedApplicationAction`<sup>Optional</sup> <a name="M2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2ManagedApplicationAction"></a>

```go
M2ManagedApplicationAction ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#m2_managed_application_action ApptestTestCase#m2_managed_application_action}.

---

##### `M2NonManagedApplicationAction`<sup>Optional</sup> <a name="M2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2NonManagedApplicationAction"></a>

```go
M2NonManagedApplicationAction ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#m2_non_managed_application_action ApptestTestCase#m2_non_managed_application_action}.

---

### ApptestTestCaseStepsActionResourceActionCloudformationAction <a name="ApptestTestCaseStepsActionResourceActionCloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionResourceActionCloudformationAction {
	ActionType: *string,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.actionType">ActionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.resource">Resource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `ActionType`<sup>Optional</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.actionType"></a>

```go
ActionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction {
	ActionType: *string,
	Properties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.actionType">ActionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.resource">Resource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `ActionType`<sup>Optional</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.actionType"></a>

```go
ActionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.properties"></a>

```go
Properties ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties {
	ForceStop: interface{},
	ImportDataSetLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.forceStop">ForceStop</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#force_stop ApptestTestCase#force_stop}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.importDataSetLocation">ImportDataSetLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#import_data_set_location ApptestTestCase#import_data_set_location}. |

---

##### `ForceStop`<sup>Optional</sup> <a name="ForceStop" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.forceStop"></a>

```go
ForceStop interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#force_stop ApptestTestCase#force_stop}.

---

##### `ImportDataSetLocation`<sup>Optional</sup> <a name="ImportDataSetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.importDataSetLocation"></a>

```go
ImportDataSetLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#import_data_set_location ApptestTestCase#import_data_set_location}.

---

### ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction <a name="ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

&apptesttestcase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction {
	ActionType: *string,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.actionType">ActionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.resource">Resource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `ActionType`<sup>Optional</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.actionType"></a>

```go
ActionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApptestTestCaseLatestVersionOutputReference <a name="ApptestTestCaseLatestVersionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseLatestVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseLatestVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion">ApptestTestCaseLatestVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() ApptestTestCaseLatestVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion">ApptestTestCaseLatestVersion</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putSourceMetadata">PutSourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putTargetMetadata">PutTargetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetSourceMetadata">ResetSourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetTargetMetadata">ResetTargetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceMetadata` <a name="PutSourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putSourceMetadata"></a>

```go
func PutSourceMetadata(value ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putSourceMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

---

##### `PutTargetMetadata` <a name="PutTargetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putTargetMetadata"></a>

```go
func PutTargetMetadata(value ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putTargetMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

---

##### `ResetSourceMetadata` <a name="ResetSourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetSourceMetadata"></a>

```go
func ResetSourceMetadata()
```

##### `ResetTargetMetadata` <a name="ResetTargetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetTargetMetadata"></a>

```go
func ResetTargetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadata">SourceMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadata">TargetMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadataInput">SourceMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadataInput">TargetMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceMetadata`<sup>Required</sup> <a name="SourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadata"></a>

```go
func SourceMetadata() ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference</a>

---

##### `TargetMetadata`<sup>Required</sup> <a name="TargetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadata"></a>

```go
func TargetMetadata() ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference</a>

---

##### `SourceMetadataInput`<sup>Optional</sup> <a name="SourceMetadataInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadataInput"></a>

```go
func SourceMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `TargetMetadataInput`<sup>Optional</sup> <a name="TargetMetadataInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadataInput"></a>

```go
func TargetMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetCaptureTool">ResetCaptureTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaptureTool` <a name="ResetCaptureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetCaptureTool"></a>

```go
func ResetCaptureTool()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureToolInput">CaptureToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureTool">CaptureTool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaptureToolInput`<sup>Optional</sup> <a name="CaptureToolInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureToolInput"></a>

```go
func CaptureToolInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CaptureTool`<sup>Required</sup> <a name="CaptureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureTool"></a>

```go
func CaptureTool() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetCaptureTool">ResetCaptureTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaptureTool` <a name="ResetCaptureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetCaptureTool"></a>

```go
func ResetCaptureTool()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureToolInput">CaptureToolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureTool">CaptureTool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaptureToolInput`<sup>Optional</sup> <a name="CaptureToolInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureToolInput"></a>

```go
func CaptureToolInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CaptureTool`<sup>Required</sup> <a name="CaptureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureTool"></a>

```go
func CaptureTool() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get"></a>

```go
func Get(index *f64) ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetCcsid">ResetCcsid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetLength">ResetLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCcsid` <a name="ResetCcsid" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetCcsid"></a>

```go
func ResetCcsid()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetFormat"></a>

```go
func ResetFormat()
```

##### `ResetLength` <a name="ResetLength" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetLength"></a>

```go
func ResetLength()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsidInput">CcsidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.lengthInput">LengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsid">Ccsid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.length">Length</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CcsidInput`<sup>Optional</sup> <a name="CcsidInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsidInput"></a>

```go
func CcsidInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.lengthInput"></a>

```go
func LengthInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Ccsid`<sup>Required</sup> <a name="Ccsid" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsid"></a>

```go
func Ccsid() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDatabaseCdc">PutDatabaseCdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDataSets">PutDataSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDatabaseCdc">ResetDatabaseCdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDataSets">ResetDataSets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabaseCdc` <a name="PutDatabaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDatabaseCdc"></a>

```go
func PutDatabaseCdc(value ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDatabaseCdc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

---

##### `PutDataSets` <a name="PutDataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDataSets"></a>

```go
func PutDataSets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDataSets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDatabaseCdc` <a name="ResetDatabaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDatabaseCdc"></a>

```go
func ResetDatabaseCdc()
```

##### `ResetDataSets` <a name="ResetDataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDataSets"></a>

```go
func ResetDataSets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdc">DatabaseCdc</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSets">DataSets</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdcInput">DatabaseCdcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSetsInput">DataSetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseCdc`<sup>Required</sup> <a name="DatabaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdc"></a>

```go
func DatabaseCdc() ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference</a>

---

##### `DataSets`<sup>Required</sup> <a name="DataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSets"></a>

```go
func DataSets() ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList</a>

---

##### `DatabaseCdcInput`<sup>Optional</sup> <a name="DatabaseCdcInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdcInput"></a>

```go
func DatabaseCdcInput() interface{}
```

- *Type:* interface{}

---

##### `DataSetsInput`<sup>Optional</sup> <a name="DataSetsInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSetsInput"></a>

```go
func DataSetsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionCompareActionInputFileOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionCompareActionInputFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionCompareActionInputFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.putFileMetadata">PutFileMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetFileMetadata">ResetFileMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetSourceLocation">ResetSourceLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetTargetLocation">ResetTargetLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFileMetadata` <a name="PutFileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.putFileMetadata"></a>

```go
func PutFileMetadata(value ApptestTestCaseStepsActionCompareActionInputFileFileMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.putFileMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

---

##### `ResetFileMetadata` <a name="ResetFileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetFileMetadata"></a>

```go
func ResetFileMetadata()
```

##### `ResetSourceLocation` <a name="ResetSourceLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetSourceLocation"></a>

```go
func ResetSourceLocation()
```

##### `ResetTargetLocation` <a name="ResetTargetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetTargetLocation"></a>

```go
func ResetTargetLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadata">FileMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadataInput">FileMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocationInput">SourceLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocationInput">TargetLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocation">SourceLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocation">TargetLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileMetadata`<sup>Required</sup> <a name="FileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadata"></a>

```go
func FileMetadata() ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference</a>

---

##### `FileMetadataInput`<sup>Optional</sup> <a name="FileMetadataInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadataInput"></a>

```go
func FileMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `SourceLocationInput`<sup>Optional</sup> <a name="SourceLocationInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocationInput"></a>

```go
func SourceLocationInput() *string
```

- *Type:* *string

---

##### `TargetLocationInput`<sup>Optional</sup> <a name="TargetLocationInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocationInput"></a>

```go
func TargetLocationInput() *string
```

- *Type:* *string

---

##### `SourceLocation`<sup>Required</sup> <a name="SourceLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocation"></a>

```go
func SourceLocation() *string
```

- *Type:* *string

---

##### `TargetLocation`<sup>Required</sup> <a name="TargetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocation"></a>

```go
func TargetLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionCompareActionInputOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionCompareActionInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionCompareActionInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resetFile">ResetFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFile` <a name="PutFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.putFile"></a>

```go
func PutFile(value ApptestTestCaseStepsActionCompareActionInputFile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a>

---

##### `ResetFile` <a name="ResetFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resetFile"></a>

```go
func ResetFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.file">File</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference">ApptestTestCaseStepsActionCompareActionInputFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fileInput">FileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.file"></a>

```go
func File() ApptestTestCaseStepsActionCompareActionInputFileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference">ApptestTestCaseStepsActionCompareActionInputFileOutputReference</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fileInput"></a>

```go
func FileInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionCompareActionOutputFileOutputReference <a name="ApptestTestCaseStepsActionCompareActionOutputFileOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionCompareActionOutputFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionCompareActionOutputFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resetFileLocation">ResetFileLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileLocation` <a name="ResetFileLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resetFileLocation"></a>

```go
func ResetFileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocationInput">FileLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocation">FileLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileLocationInput`<sup>Optional</sup> <a name="FileLocationInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocationInput"></a>

```go
func FileLocationInput() *string
```

- *Type:* *string

---

##### `FileLocation`<sup>Required</sup> <a name="FileLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocation"></a>

```go
func FileLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionCompareActionOutputOutputReference <a name="ApptestTestCaseStepsActionCompareActionOutputOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionCompareActionOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionCompareActionOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resetFile">ResetFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFile` <a name="PutFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.putFile"></a>

```go
func PutFile(value ApptestTestCaseStepsActionCompareActionOutputFile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a>

---

##### `ResetFile` <a name="ResetFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resetFile"></a>

```go
func ResetFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.file">File</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference">ApptestTestCaseStepsActionCompareActionOutputFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fileInput">FileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.file"></a>

```go
func File() ApptestTestCaseStepsActionCompareActionOutputFileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference">ApptestTestCaseStepsActionCompareActionOutputFileOutputReference</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fileInput"></a>

```go
func FileInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionCompareActionOutputReference <a name="ApptestTestCaseStepsActionCompareActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionCompareActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionCompareActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInput` <a name="PutInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putInput"></a>

```go
func PutInput(value ApptestTestCaseStepsActionCompareActionInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a>

---

##### `PutOutput` <a name="PutOutput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putOutput"></a>

```go
func PutOutput(value ApptestTestCaseStepsActionCompareActionOutput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a>

---

##### `ResetInput` <a name="ResetInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetInput"></a>

```go
func ResetInput()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetOutput"></a>

```go
func ResetOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.input">Input</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference">ApptestTestCaseStepsActionCompareActionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.output">Output</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference">ApptestTestCaseStepsActionCompareActionOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.inputInput">InputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.outputInput">OutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.input"></a>

```go
func Input() ApptestTestCaseStepsActionCompareActionInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference">ApptestTestCaseStepsActionCompareActionInputOutputReference</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.output"></a>

```go
func Output() ApptestTestCaseStepsActionCompareActionOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference">ApptestTestCaseStepsActionCompareActionOutputOutputReference</a>

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.inputInput"></a>

```go
func InputInput() interface{}
```

- *Type:* interface{}

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.outputInput"></a>

```go
func OutputInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobName">ResetBatchJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobParameters">ResetBatchJobParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetExportDataSetNames">ResetExportDataSetNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchJobName` <a name="ResetBatchJobName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobName"></a>

```go
func ResetBatchJobName()
```

##### `ResetBatchJobParameters` <a name="ResetBatchJobParameters" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobParameters"></a>

```go
func ResetBatchJobParameters()
```

##### `ResetExportDataSetNames` <a name="ResetExportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetExportDataSetNames"></a>

```go
func ResetExportDataSetNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobNameInput">BatchJobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParametersInput">BatchJobParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNamesInput">ExportDataSetNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobName">BatchJobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParameters">BatchJobParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNames">ExportDataSetNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchJobNameInput`<sup>Optional</sup> <a name="BatchJobNameInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobNameInput"></a>

```go
func BatchJobNameInput() *string
```

- *Type:* *string

---

##### `BatchJobParametersInput`<sup>Optional</sup> <a name="BatchJobParametersInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParametersInput"></a>

```go
func BatchJobParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExportDataSetNamesInput`<sup>Optional</sup> <a name="ExportDataSetNamesInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNamesInput"></a>

```go
func ExportDataSetNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BatchJobName`<sup>Required</sup> <a name="BatchJobName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobName"></a>

```go
func BatchJobName() *string
```

- *Type:* *string

---

##### `BatchJobParameters`<sup>Required</sup> <a name="BatchJobParameters" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParameters"></a>

```go
func BatchJobParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExportDataSetNames`<sup>Required</sup> <a name="ExportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNames"></a>

```go
func ExportDataSetNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionMainframeActionActionTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putBatch">PutBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putTn3270">PutTn3270</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetBatch">ResetBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetTn3270">ResetTn3270</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBatch` <a name="PutBatch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putBatch"></a>

```go
func PutBatch(value ApptestTestCaseStepsActionMainframeActionActionTypeBatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putBatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

---

##### `PutTn3270` <a name="PutTn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putTn3270"></a>

```go
func PutTn3270(value ApptestTestCaseStepsActionMainframeActionActionTypeTn3270)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putTn3270.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

---

##### `ResetBatch` <a name="ResetBatch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetBatch"></a>

```go
func ResetBatch()
```

##### `ResetTn3270` <a name="ResetTn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetTn3270"></a>

```go
func ResetTn3270()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batch">Batch</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270">Tn3270</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batchInput">BatchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270Input">Tn3270Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Batch`<sup>Required</sup> <a name="Batch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batch"></a>

```go
func Batch() ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference</a>

---

##### `Tn3270`<sup>Required</sup> <a name="Tn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270"></a>

```go
func Tn3270() ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference</a>

---

##### `BatchInput`<sup>Optional</sup> <a name="BatchInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batchInput"></a>

```go
func BatchInput() interface{}
```

- *Type:* interface{}

---

##### `Tn3270Input`<sup>Optional</sup> <a name="Tn3270Input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270Input"></a>

```go
func Tn3270Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.putScript">PutScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetExportDataSetNames">ResetExportDataSetNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetScript">ResetScript</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScript` <a name="PutScript" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.putScript"></a>

```go
func PutScript(value ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.putScript.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

---

##### `ResetExportDataSetNames` <a name="ResetExportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetExportDataSetNames"></a>

```go
func ResetExportDataSetNames()
```

##### `ResetScript` <a name="ResetScript" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetScript"></a>

```go
func ResetScript()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.script">Script</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNamesInput">ExportDataSetNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.scriptInput">ScriptInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNames">ExportDataSetNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.script"></a>

```go
func Script() ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference</a>

---

##### `ExportDataSetNamesInput`<sup>Optional</sup> <a name="ExportDataSetNamesInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNamesInput"></a>

```go
func ExportDataSetNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.scriptInput"></a>

```go
func ScriptInput() interface{}
```

- *Type:* interface{}

---

##### `ExportDataSetNames`<sup>Required</sup> <a name="ExportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNames"></a>

```go
func ExportDataSetNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetScriptLocation">ResetScriptLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScriptLocation` <a name="ResetScriptLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetScriptLocation"></a>

```go
func ResetScriptLocation()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocationInput">ScriptLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocation">ScriptLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScriptLocationInput`<sup>Optional</sup> <a name="ScriptLocationInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocationInput"></a>

```go
func ScriptLocationInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ScriptLocation`<sup>Required</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocation"></a>

```go
func ScriptLocation() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionMainframeActionOutputReference <a name="ApptestTestCaseStepsActionMainframeActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionMainframeActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionMainframeActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putActionType">PutActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetActionType">ResetActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActionType` <a name="PutActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putActionType"></a>

```go
func PutActionType(value ApptestTestCaseStepsActionMainframeActionActionType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putActionType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a>

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putProperties"></a>

```go
func PutProperties(value ApptestTestCaseStepsActionMainframeActionProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a>

---

##### `ResetActionType` <a name="ResetActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetActionType"></a>

```go
func ResetActionType()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetResource` <a name="ResetResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionType">ActionType</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference">ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionTypeInput">ActionTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionType"></a>

```go
func ActionType() ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.properties"></a>

```go
func Properties() ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference">ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference</a>

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionTypeInput"></a>

```go
func ActionTypeInput() interface{}
```

- *Type:* interface{}

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference <a name="ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionMainframeActionPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resetDmsTaskArn">ResetDmsTaskArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDmsTaskArn` <a name="ResetDmsTaskArn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resetDmsTaskArn"></a>

```go
func ResetDmsTaskArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArnInput">DmsTaskArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArn">DmsTaskArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DmsTaskArnInput`<sup>Optional</sup> <a name="DmsTaskArnInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArnInput"></a>

```go
func DmsTaskArnInput() *string
```

- *Type:* *string

---

##### `DmsTaskArn`<sup>Required</sup> <a name="DmsTaskArn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArn"></a>

```go
func DmsTaskArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionOutputReference <a name="ApptestTestCaseStepsActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putCompareAction">PutCompareAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putMainframeAction">PutMainframeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putResourceAction">PutResourceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetCompareAction">ResetCompareAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetMainframeAction">ResetMainframeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetResourceAction">ResetResourceAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCompareAction` <a name="PutCompareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putCompareAction"></a>

```go
func PutCompareAction(value ApptestTestCaseStepsActionCompareAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putCompareAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a>

---

##### `PutMainframeAction` <a name="PutMainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putMainframeAction"></a>

```go
func PutMainframeAction(value ApptestTestCaseStepsActionMainframeAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putMainframeAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a>

---

##### `PutResourceAction` <a name="PutResourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putResourceAction"></a>

```go
func PutResourceAction(value ApptestTestCaseStepsActionResourceAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putResourceAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a>

---

##### `ResetCompareAction` <a name="ResetCompareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetCompareAction"></a>

```go
func ResetCompareAction()
```

##### `ResetMainframeAction` <a name="ResetMainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetMainframeAction"></a>

```go
func ResetMainframeAction()
```

##### `ResetResourceAction` <a name="ResetResourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetResourceAction"></a>

```go
func ResetResourceAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareAction">CompareAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference">ApptestTestCaseStepsActionCompareActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeAction">MainframeAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference">ApptestTestCaseStepsActionMainframeActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceAction">ResourceAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference">ApptestTestCaseStepsActionResourceActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareActionInput">CompareActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeActionInput">MainframeActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceActionInput">ResourceActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompareAction`<sup>Required</sup> <a name="CompareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareAction"></a>

```go
func CompareAction() ApptestTestCaseStepsActionCompareActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference">ApptestTestCaseStepsActionCompareActionOutputReference</a>

---

##### `MainframeAction`<sup>Required</sup> <a name="MainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeAction"></a>

```go
func MainframeAction() ApptestTestCaseStepsActionMainframeActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference">ApptestTestCaseStepsActionMainframeActionOutputReference</a>

---

##### `ResourceAction`<sup>Required</sup> <a name="ResourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceAction"></a>

```go
func ResourceAction() ApptestTestCaseStepsActionResourceActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference">ApptestTestCaseStepsActionResourceActionOutputReference</a>

---

##### `CompareActionInput`<sup>Optional</sup> <a name="CompareActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareActionInput"></a>

```go
func CompareActionInput() interface{}
```

- *Type:* interface{}

---

##### `MainframeActionInput`<sup>Optional</sup> <a name="MainframeActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeActionInput"></a>

```go
func MainframeActionInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceActionInput`<sup>Optional</sup> <a name="ResourceActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceActionInput"></a>

```go
func ResourceActionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetActionType">ResetActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionType` <a name="ResetActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetActionType"></a>

```go
func ResetActionType()
```

##### `ResetResource` <a name="ResetResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionTypeInput">ActionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionType">ActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionTypeInput"></a>

```go
func ActionTypeInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionType"></a>

```go
func ActionType() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetActionType">ResetActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.putProperties"></a>

```go
func PutProperties(value ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

---

##### `ResetActionType` <a name="ResetActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetActionType"></a>

```go
func ResetActionType()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetResource` <a name="ResetResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionTypeInput">ActionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionType">ActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.properties"></a>

```go
func Properties() ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference</a>

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionTypeInput"></a>

```go
func ActionTypeInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionType"></a>

```go
func ActionType() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetForceStop">ResetForceStop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetImportDataSetLocation">ResetImportDataSetLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForceStop` <a name="ResetForceStop" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetForceStop"></a>

```go
func ResetForceStop()
```

##### `ResetImportDataSetLocation` <a name="ResetImportDataSetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetImportDataSetLocation"></a>

```go
func ResetImportDataSetLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStopInput">ForceStopInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocationInput">ImportDataSetLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStop">ForceStop</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocation">ImportDataSetLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForceStopInput`<sup>Optional</sup> <a name="ForceStopInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStopInput"></a>

```go
func ForceStopInput() interface{}
```

- *Type:* interface{}

---

##### `ImportDataSetLocationInput`<sup>Optional</sup> <a name="ImportDataSetLocationInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocationInput"></a>

```go
func ImportDataSetLocationInput() *string
```

- *Type:* *string

---

##### `ForceStop`<sup>Required</sup> <a name="ForceStop" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStop"></a>

```go
func ForceStop() interface{}
```

- *Type:* interface{}

---

##### `ImportDataSetLocation`<sup>Required</sup> <a name="ImportDataSetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocation"></a>

```go
func ImportDataSetLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetActionType">ResetActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionType` <a name="ResetActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetActionType"></a>

```go
func ResetActionType()
```

##### `ResetResource` <a name="ResetResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionTypeInput">ActionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionType">ActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionTypeInput`<sup>Optional</sup> <a name="ActionTypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionTypeInput"></a>

```go
func ActionTypeInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionType"></a>

```go
func ActionType() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsActionResourceActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsActionResourceActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApptestTestCaseStepsActionResourceActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putCloudformationAction">PutCloudformationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2ManagedApplicationAction">PutM2ManagedApplicationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2NonManagedApplicationAction">PutM2NonManagedApplicationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetCloudformationAction">ResetCloudformationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2ManagedApplicationAction">ResetM2ManagedApplicationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2NonManagedApplicationAction">ResetM2NonManagedApplicationAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudformationAction` <a name="PutCloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putCloudformationAction"></a>

```go
func PutCloudformationAction(value ApptestTestCaseStepsActionResourceActionCloudformationAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putCloudformationAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a>

---

##### `PutM2ManagedApplicationAction` <a name="PutM2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2ManagedApplicationAction"></a>

```go
func PutM2ManagedApplicationAction(value ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2ManagedApplicationAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

---

##### `PutM2NonManagedApplicationAction` <a name="PutM2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2NonManagedApplicationAction"></a>

```go
func PutM2NonManagedApplicationAction(value ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2NonManagedApplicationAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

---

##### `ResetCloudformationAction` <a name="ResetCloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetCloudformationAction"></a>

```go
func ResetCloudformationAction()
```

##### `ResetM2ManagedApplicationAction` <a name="ResetM2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2ManagedApplicationAction"></a>

```go
func ResetM2ManagedApplicationAction()
```

##### `ResetM2NonManagedApplicationAction` <a name="ResetM2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2NonManagedApplicationAction"></a>

```go
func ResetM2NonManagedApplicationAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationAction">CloudformationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference">ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationAction">M2ManagedApplicationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationAction">M2NonManagedApplicationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationActionInput">CloudformationActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationActionInput">M2ManagedApplicationActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationActionInput">M2NonManagedApplicationActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudformationAction`<sup>Required</sup> <a name="CloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationAction"></a>

```go
func CloudformationAction() ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference">ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference</a>

---

##### `M2ManagedApplicationAction`<sup>Required</sup> <a name="M2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationAction"></a>

```go
func M2ManagedApplicationAction() ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference</a>

---

##### `M2NonManagedApplicationAction`<sup>Required</sup> <a name="M2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationAction"></a>

```go
func M2NonManagedApplicationAction() ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference</a>

---

##### `CloudformationActionInput`<sup>Optional</sup> <a name="CloudformationActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationActionInput"></a>

```go
func CloudformationActionInput() interface{}
```

- *Type:* interface{}

---

##### `M2ManagedApplicationActionInput`<sup>Optional</sup> <a name="M2ManagedApplicationActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationActionInput"></a>

```go
func M2ManagedApplicationActionInput() interface{}
```

- *Type:* interface{}

---

##### `M2NonManagedApplicationActionInput`<sup>Optional</sup> <a name="M2NonManagedApplicationActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationActionInput"></a>

```go
func M2NonManagedApplicationActionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsList <a name="ApptestTestCaseStepsList" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApptestTestCaseStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.get"></a>

```go
func Get(index *f64) ApptestTestCaseStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApptestTestCaseStepsOutputReference <a name="ApptestTestCaseStepsOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apptesttestcase"

apptesttestcase.NewApptestTestCaseStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApptestTestCaseStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.putAction"></a>

```go
func PutAction(value ApptestTestCaseStepsAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference">ApptestTestCaseStepsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.action"></a>

```go
func Action() ApptestTestCaseStepsActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference">ApptestTestCaseStepsActionOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



