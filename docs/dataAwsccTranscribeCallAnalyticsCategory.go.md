# `dataAwsccTranscribeCallAnalyticsCategory` Submodule <a name="`dataAwsccTranscribeCallAnalyticsCategory` Submodule" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTranscribeCallAnalyticsCategory <a name="DataAwsccTranscribeCallAnalyticsCategory" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/transcribe_call_analytics_category awscc_transcribe_call_analytics_category}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategory(scope Construct, id *string, config DataAwsccTranscribeCallAnalyticsCategoryConfig) DataAwsccTranscribeCallAnalyticsCategory
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig">DataAwsccTranscribeCallAnalyticsCategoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig">DataAwsccTranscribeCallAnalyticsCategoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccTranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategory_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategory_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategory_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategory_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccTranscribeCallAnalyticsCategory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccTranscribeCallAnalyticsCategory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccTranscribeCallAnalyticsCategory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/transcribe_call_analytics_category#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTranscribeCallAnalyticsCategory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.categoryName">CategoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.inputType">InputType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.lastUpdateTime">LastUpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList">DataAwsccTranscribeCallAnalyticsCategoryRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList">DataAwsccTranscribeCallAnalyticsCategoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CategoryName`<sup>Required</sup> <a name="CategoryName" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.categoryName"></a>

```go
func CategoryName() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `InputType`<sup>Required</sup> <a name="InputType" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.inputType"></a>

```go
func InputType() *string
```

- *Type:* *string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.lastUpdateTime"></a>

```go
func LastUpdateTime() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.rules"></a>

```go
func Rules() DataAwsccTranscribeCallAnalyticsCategoryRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList">DataAwsccTranscribeCallAnalyticsCategoryRulesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.tags"></a>

```go
func Tags() DataAwsccTranscribeCallAnalyticsCategoryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList">DataAwsccTranscribeCallAnalyticsCategoryTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategory.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTranscribeCallAnalyticsCategoryConfig <a name="DataAwsccTranscribeCallAnalyticsCategoryConfig" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

&dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategoryConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/transcribe_call_analytics_category#id DataAwsccTranscribeCallAnalyticsCategory#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccTranscribeCallAnalyticsCategoryRules <a name="DataAwsccTranscribeCallAnalyticsCategoryRules" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

&dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategoryRules {

}
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

&dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter {

}
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

&dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange {

}
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

&dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange {

}
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

&dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter {

}
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

&dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange {

}
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

&dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange {

}
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

&dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter {

}
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

&dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange {

}
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

&dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange {

}
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

&dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter {

}
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

&dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange {

}
```


### DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

&dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange {

}
```


### DataAwsccTranscribeCallAnalyticsCategoryTags <a name="DataAwsccTranscribeCallAnalyticsCategoryTags" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

&dataawscctranscribecallanalyticscategory.DataAwsccTranscribeCallAnalyticsCategoryTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```go
func EndTime() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```go
func StartTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negate">Negate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRole">ParticipantRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.absoluteTimeRange"></a>

```go
func AbsoluteTimeRange() DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterAbsoluteTimeRangeOutputReference</a>

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.negate"></a>

```go
func Negate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ParticipantRole`<sup>Required</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.participantRole"></a>

```go
func ParticipantRole() *string
```

- *Type:* *string

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.relativeTimeRange"></a>

```go
func RelativeTimeRange() DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference</a>

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilter</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```go
func EndPercentage() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```go
func StartPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterRelativeTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesList <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesList" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccTranscribeCallAnalyticsCategoryRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.get"></a>

```go
func Get(index *f64) DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```go
func EndTime() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```go
func StartTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negate">Negate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.absoluteTimeRange"></a>

```go
func AbsoluteTimeRange() DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterAbsoluteTimeRangeOutputReference</a>

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.negate"></a>

```go
func Negate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.relativeTimeRange"></a>

```go
func RelativeTimeRange() DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference</a>

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilter</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```go
func EndPercentage() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```go
func StartPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterRelativeTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilter">InterruptionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilter">NonTalkTimeFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilter">SentimentFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilter">TranscriptFilter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRules">DataAwsccTranscribeCallAnalyticsCategoryRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InterruptionFilter`<sup>Required</sup> <a name="InterruptionFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.interruptionFilter"></a>

```go
func InterruptionFilter() DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesInterruptionFilterOutputReference</a>

---

##### `NonTalkTimeFilter`<sup>Required</sup> <a name="NonTalkTimeFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.nonTalkTimeFilter"></a>

```go
func NonTalkTimeFilter() DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesNonTalkTimeFilterOutputReference</a>

---

##### `SentimentFilter`<sup>Required</sup> <a name="SentimentFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.sentimentFilter"></a>

```go
func SentimentFilter() DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference</a>

---

##### `TranscriptFilter`<sup>Required</sup> <a name="TranscriptFilter" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.transcriptFilter"></a>

```go
func TranscriptFilter() DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTranscribeCallAnalyticsCategoryRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRules">DataAwsccTranscribeCallAnalyticsCategoryRules</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```go
func EndTime() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```go
func StartTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negate">Negate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRole">ParticipantRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentiments">Sentiments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.absoluteTimeRange"></a>

```go
func AbsoluteTimeRange() DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterAbsoluteTimeRangeOutputReference</a>

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.negate"></a>

```go
func Negate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ParticipantRole`<sup>Required</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.participantRole"></a>

```go
func ParticipantRole() *string
```

- *Type:* *string

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.relativeTimeRange"></a>

```go
func RelativeTimeRange() DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference</a>

---

##### `Sentiments`<sup>Required</sup> <a name="Sentiments" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.sentiments"></a>

```go
func Sentiments() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilter</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```go
func EndPercentage() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```go
func StartPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesSentimentFilterRelativeTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTime">EndTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTime">StartTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.endTime"></a>

```go
func EndTime() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.startTime"></a>

```go
func StartTime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRange">AbsoluteTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negate">Negate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRole">ParticipantRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRange">RelativeTimeRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targets">Targets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterType">TranscriptFilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbsoluteTimeRange`<sup>Required</sup> <a name="AbsoluteTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.absoluteTimeRange"></a>

```go
func AbsoluteTimeRange() DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterAbsoluteTimeRangeOutputReference</a>

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.negate"></a>

```go
func Negate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ParticipantRole`<sup>Required</sup> <a name="ParticipantRole" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.participantRole"></a>

```go
func ParticipantRole() *string
```

- *Type:* *string

---

##### `RelativeTimeRange`<sup>Required</sup> <a name="RelativeTimeRange" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.relativeTimeRange"></a>

```go
func RelativeTimeRange() DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.targets"></a>

```go
func Targets() *[]*string
```

- *Type:* *[]*string

---

##### `TranscriptFilterType`<sup>Required</sup> <a name="TranscriptFilterType" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.transcriptFilterType"></a>

```go
func TranscriptFilterType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilter</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentage">EndPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.first">First</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.last">Last</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentage">StartPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndPercentage`<sup>Required</sup> <a name="EndPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.endPercentage"></a>

```go
func EndPercentage() *f64
```

- *Type:* *f64

---

##### `First`<sup>Required</sup> <a name="First" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.first"></a>

```go
func First() *f64
```

- *Type:* *f64

---

##### `Last`<sup>Required</sup> <a name="Last" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.last"></a>

```go
func Last() *f64
```

- *Type:* *f64

---

##### `StartPercentage`<sup>Required</sup> <a name="StartPercentage" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.startPercentage"></a>

```go
func StartPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange">DataAwsccTranscribeCallAnalyticsCategoryRulesTranscriptFilterRelativeTimeRange</a>

---


### DataAwsccTranscribeCallAnalyticsCategoryTagsList <a name="DataAwsccTranscribeCallAnalyticsCategoryTagsList" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccTranscribeCallAnalyticsCategoryTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.get"></a>

```go
func Get(index *f64) DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference <a name="DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategory"

dataawscctranscribecallanalyticscategory.NewDataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTags">DataAwsccTranscribeCallAnalyticsCategoryTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccTranscribeCallAnalyticsCategoryTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategory.DataAwsccTranscribeCallAnalyticsCategoryTags">DataAwsccTranscribeCallAnalyticsCategoryTags</a>

---



