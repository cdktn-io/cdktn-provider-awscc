# `dataAwsccApptestTestCase` Submodule <a name="`dataAwsccApptestTestCase` Submodule" id="@cdktn/provider-awscc.dataAwsccApptestTestCase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApptestTestCase <a name="DataAwsccApptestTestCase" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apptest_test_case awscc_apptest_test_case}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCase(scope Construct, id *string, config DataAwsccApptestTestCaseConfig) DataAwsccApptestTestCase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig">DataAwsccApptestTestCaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig">DataAwsccApptestTestCaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApptestTestCase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.DataAwsccApptestTestCase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.DataAwsccApptestTestCase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.DataAwsccApptestTestCase_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.DataAwsccApptestTestCase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccApptestTestCase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccApptestTestCase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccApptestTestCase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apptest_test_case#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApptestTestCase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.lastUpdateTime">LastUpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.latestVersion">LatestVersion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference">DataAwsccApptestTestCaseLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.steps">Steps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList">DataAwsccApptestTestCaseStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.testCaseArn">TestCaseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.testCaseId">TestCaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.testCaseVersion">TestCaseVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.lastUpdateTime"></a>

```go
func LastUpdateTime() *string
```

- *Type:* *string

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.latestVersion"></a>

```go
func LatestVersion() DataAwsccApptestTestCaseLatestVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference">DataAwsccApptestTestCaseLatestVersionOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.steps"></a>

```go
func Steps() DataAwsccApptestTestCaseStepsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList">DataAwsccApptestTestCaseStepsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `TestCaseArn`<sup>Required</sup> <a name="TestCaseArn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.testCaseArn"></a>

```go
func TestCaseArn() *string
```

- *Type:* *string

---

##### `TestCaseId`<sup>Required</sup> <a name="TestCaseId" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.testCaseId"></a>

```go
func TestCaseId() *string
```

- *Type:* *string

---

##### `TestCaseVersion`<sup>Required</sup> <a name="TestCaseVersion" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.testCaseVersion"></a>

```go
func TestCaseVersion() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApptestTestCaseConfig <a name="DataAwsccApptestTestCaseConfig" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apptest_test_case#id DataAwsccApptestTestCase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApptestTestCaseLatestVersion <a name="DataAwsccApptestTestCaseLatestVersion" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseLatestVersion {

}
```


### DataAwsccApptestTestCaseSteps <a name="DataAwsccApptestTestCaseSteps" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseSteps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseSteps {

}
```


### DataAwsccApptestTestCaseStepsAction <a name="DataAwsccApptestTestCaseStepsAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsAction {

}
```


### DataAwsccApptestTestCaseStepsActionCompareAction <a name="DataAwsccApptestTestCaseStepsActionCompareAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionCompareAction {

}
```


### DataAwsccApptestTestCaseStepsActionCompareActionInput <a name="DataAwsccApptestTestCaseStepsActionCompareActionInput" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionCompareActionInput {

}
```


### DataAwsccApptestTestCaseStepsActionCompareActionInputFile <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFile" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionCompareActionInputFile {

}
```


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata {

}
```


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc {

}
```


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata {

}
```


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata {

}
```


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets {

}
```


### DataAwsccApptestTestCaseStepsActionCompareActionOutput <a name="DataAwsccApptestTestCaseStepsActionCompareActionOutput" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionCompareActionOutput {

}
```


### DataAwsccApptestTestCaseStepsActionCompareActionOutputFile <a name="DataAwsccApptestTestCaseStepsActionCompareActionOutputFile" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFile {

}
```


### DataAwsccApptestTestCaseStepsActionMainframeAction <a name="DataAwsccApptestTestCaseStepsActionMainframeAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionMainframeAction {

}
```


### DataAwsccApptestTestCaseStepsActionMainframeActionActionType <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionType" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionMainframeActionActionType {

}
```


### DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch {

}
```


### DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270 <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270 {

}
```


### DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script {

}
```


### DataAwsccApptestTestCaseStepsActionMainframeActionProperties <a name="DataAwsccApptestTestCaseStepsActionMainframeActionProperties" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionMainframeActionProperties {

}
```


### DataAwsccApptestTestCaseStepsActionResourceAction <a name="DataAwsccApptestTestCaseStepsActionResourceAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionResourceAction {

}
```


### DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction <a name="DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction {

}
```


### DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction <a name="DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction {

}
```


### DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties <a name="DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties {

}
```


### DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction <a name="DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

&dataawsccapptesttestcase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApptestTestCaseLatestVersionOutputReference <a name="DataAwsccApptestTestCaseLatestVersionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseLatestVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseLatestVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersion">DataAwsccApptestTestCaseLatestVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseLatestVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseLatestVersion">DataAwsccApptestTestCaseLatestVersion</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadata">SourceMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadata">TargetMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceMetadata`<sup>Required</sup> <a name="SourceMetadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadata"></a>

```go
func SourceMetadata() DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference</a>

---

##### `TargetMetadata`<sup>Required</sup> <a name="TargetMetadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadata"></a>

```go
func TargetMetadata() DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureTool">CaptureTool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaptureTool`<sup>Required</sup> <a name="CaptureTool" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureTool"></a>

```go
func CaptureTool() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureTool">CaptureTool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaptureTool`<sup>Required</sup> <a name="CaptureTool" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureTool"></a>

```go
func CaptureTool() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get"></a>

```go
func Get(index *f64) DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsid">Ccsid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.length">Length</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ccsid`<sup>Required</sup> <a name="Ccsid" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsid"></a>

```go
func Ccsid() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdc">DatabaseCdc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSets">DataSets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseCdc`<sup>Required</sup> <a name="DatabaseCdc" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdc"></a>

```go
func DatabaseCdc() DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference</a>

---

##### `DataSets`<sup>Required</sup> <a name="DataSets" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSets"></a>

```go
func DataSets() DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadata">FileMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocation">SourceLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocation">TargetLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFile">DataAwsccApptestTestCaseStepsActionCompareActionInputFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileMetadata`<sup>Required</sup> <a name="FileMetadata" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadata"></a>

```go
func FileMetadata() DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference</a>

---

##### `SourceLocation`<sup>Required</sup> <a name="SourceLocation" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocation"></a>

```go
func SourceLocation() *string
```

- *Type:* *string

---

##### `TargetLocation`<sup>Required</sup> <a name="TargetLocation" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocation"></a>

```go
func TargetLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionCompareActionInputFile
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFile">DataAwsccApptestTestCaseStepsActionCompareActionInputFile</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.file">File</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInput">DataAwsccApptestTestCaseStepsActionCompareActionInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.file"></a>

```go
func File() DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputFileOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionCompareActionInput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInput">DataAwsccApptestTestCaseStepsActionCompareActionInput</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocation">FileLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFile">DataAwsccApptestTestCaseStepsActionCompareActionOutputFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileLocation`<sup>Required</sup> <a name="FileLocation" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocation"></a>

```go
func FileLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionCompareActionOutputFile
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFile">DataAwsccApptestTestCaseStepsActionCompareActionOutputFile</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.file">File</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutput">DataAwsccApptestTestCaseStepsActionCompareActionOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.file"></a>

```go
func File() DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionOutputFileOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionCompareActionOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutput">DataAwsccApptestTestCaseStepsActionCompareActionOutput</a>

---


### DataAwsccApptestTestCaseStepsActionCompareActionOutputReference <a name="DataAwsccApptestTestCaseStepsActionCompareActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionCompareActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionCompareActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.input">Input</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.output">Output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareAction">DataAwsccApptestTestCaseStepsActionCompareAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.input"></a>

```go
func Input() DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionInputOutputReference</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.output"></a>

```go
func Output() DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionOutputOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionCompareAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareAction">DataAwsccApptestTestCaseStepsActionCompareAction</a>

---


### DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobName">BatchJobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParameters">BatchJobParameters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNames">ExportDataSetNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BatchJobName`<sup>Required</sup> <a name="BatchJobName" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobName"></a>

```go
func BatchJobName() *string
```

- *Type:* *string

---

##### `BatchJobParameters`<sup>Required</sup> <a name="BatchJobParameters" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParameters"></a>

```go
func BatchJobParameters() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ExportDataSetNames`<sup>Required</sup> <a name="ExportDataSetNames" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNames"></a>

```go
func ExportDataSetNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

---


### DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batch">Batch</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270">Tn3270</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionType">DataAwsccApptestTestCaseStepsActionMainframeActionActionType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Batch`<sup>Required</sup> <a name="Batch" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batch"></a>

```go
func Batch() DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference</a>

---

##### `Tn3270`<sup>Required</sup> <a name="Tn3270" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270"></a>

```go
func Tn3270() DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionMainframeActionActionType
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionType">DataAwsccApptestTestCaseStepsActionMainframeActionActionType</a>

---


### DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNames">ExportDataSetNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.script">Script</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExportDataSetNames`<sup>Required</sup> <a name="ExportDataSetNames" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNames"></a>

```go
func ExportDataSetNames() *[]*string
```

- *Type:* *[]*string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.script"></a>

```go
func Script() DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

---


### DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference <a name="DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocation">ScriptLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScriptLocation`<sup>Required</sup> <a name="ScriptLocation" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocation"></a>

```go
func ScriptLocation() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

---


### DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference <a name="DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionMainframeActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.actionType">ActionType</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeAction">DataAwsccApptestTestCaseStepsActionMainframeAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.actionType"></a>

```go
func ActionType() DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionActionTypeOutputReference</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.properties"></a>

```go
func Properties() DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference</a>

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionMainframeAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeAction">DataAwsccApptestTestCaseStepsActionMainframeAction</a>

---


### DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference <a name="DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArn">DmsTaskArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionProperties">DataAwsccApptestTestCaseStepsActionMainframeActionProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DmsTaskArn`<sup>Required</sup> <a name="DmsTaskArn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArn"></a>

```go
func DmsTaskArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionMainframeActionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionProperties">DataAwsccApptestTestCaseStepsActionMainframeActionProperties</a>

---


### DataAwsccApptestTestCaseStepsActionOutputReference <a name="DataAwsccApptestTestCaseStepsActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.compareAction">CompareAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.mainframeAction">MainframeAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.resourceAction">ResourceAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsAction">DataAwsccApptestTestCaseStepsAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompareAction`<sup>Required</sup> <a name="CompareAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.compareAction"></a>

```go
func CompareAction() DataAwsccApptestTestCaseStepsActionCompareActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionCompareActionOutputReference">DataAwsccApptestTestCaseStepsActionCompareActionOutputReference</a>

---

##### `MainframeAction`<sup>Required</sup> <a name="MainframeAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.mainframeAction"></a>

```go
func MainframeAction() DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference">DataAwsccApptestTestCaseStepsActionMainframeActionOutputReference</a>

---

##### `ResourceAction`<sup>Required</sup> <a name="ResourceAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.resourceAction"></a>

```go
func ResourceAction() DataAwsccApptestTestCaseStepsActionResourceActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsAction">DataAwsccApptestTestCaseStepsAction</a>

---


### DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference <a name="DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionType">ActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction">DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionType"></a>

```go
func ActionType() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction">DataAwsccApptestTestCaseStepsActionResourceActionCloudformationAction</a>

---


### DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference <a name="DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionType">ActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionType"></a>

```go
func ActionType() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.properties"></a>

```go
func Properties() DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference</a>

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

---


### DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference <a name="DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStop">ForceStop</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocation">ImportDataSetLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForceStop`<sup>Required</sup> <a name="ForceStop" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStop"></a>

```go
func ForceStop() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ImportDataSetLocation`<sup>Required</sup> <a name="ImportDataSetLocation" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocation"></a>

```go
func ImportDataSetLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

---


### DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference <a name="DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionType">ActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionType"></a>

```go
func ActionType() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

---


### DataAwsccApptestTestCaseStepsActionResourceActionOutputReference <a name="DataAwsccApptestTestCaseStepsActionResourceActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsActionResourceActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApptestTestCaseStepsActionResourceActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationAction">CloudformationAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationAction">M2ManagedApplicationAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationAction">M2NonManagedApplicationAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceAction">DataAwsccApptestTestCaseStepsActionResourceAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudformationAction`<sup>Required</sup> <a name="CloudformationAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationAction"></a>

```go
func CloudformationAction() DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference</a>

---

##### `M2ManagedApplicationAction`<sup>Required</sup> <a name="M2ManagedApplicationAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationAction"></a>

```go
func M2ManagedApplicationAction() DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference</a>

---

##### `M2NonManagedApplicationAction`<sup>Required</sup> <a name="M2NonManagedApplicationAction" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationAction"></a>

```go
func M2NonManagedApplicationAction() DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference">DataAwsccApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseStepsActionResourceAction
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionResourceAction">DataAwsccApptestTestCaseStepsActionResourceAction</a>

---


### DataAwsccApptestTestCaseStepsList <a name="DataAwsccApptestTestCaseStepsList" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApptestTestCaseStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.get"></a>

```go
func Get(index *f64) DataAwsccApptestTestCaseStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApptestTestCaseStepsOutputReference <a name="DataAwsccApptestTestCaseStepsOutputReference" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapptesttestcase"

dataawsccapptesttestcase.NewDataAwsccApptestTestCaseStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApptestTestCaseStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference">DataAwsccApptestTestCaseStepsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseSteps">DataAwsccApptestTestCaseSteps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.action"></a>

```go
func Action() DataAwsccApptestTestCaseStepsActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsActionOutputReference">DataAwsccApptestTestCaseStepsActionOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApptestTestCaseSteps
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApptestTestCase.DataAwsccApptestTestCaseSteps">DataAwsccApptestTestCaseSteps</a>

---



