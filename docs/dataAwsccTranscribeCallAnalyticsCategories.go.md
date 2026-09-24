# `dataAwsccTranscribeCallAnalyticsCategories` Submodule <a name="`dataAwsccTranscribeCallAnalyticsCategories` Submodule" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTranscribeCallAnalyticsCategories <a name="DataAwsccTranscribeCallAnalyticsCategories" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/transcribe_call_analytics_categories awscc_transcribe_call_analytics_categories}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategories"

dataawscctranscribecallanalyticscategories.NewDataAwsccTranscribeCallAnalyticsCategories(scope Construct, id *string, config DataAwsccTranscribeCallAnalyticsCategoriesConfig) DataAwsccTranscribeCallAnalyticsCategories
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig">DataAwsccTranscribeCallAnalyticsCategoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig">DataAwsccTranscribeCallAnalyticsCategoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccTranscribeCallAnalyticsCategories resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategories"

dataawscctranscribecallanalyticscategories.DataAwsccTranscribeCallAnalyticsCategories_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategories"

dataawscctranscribecallanalyticscategories.DataAwsccTranscribeCallAnalyticsCategories_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategories"

dataawscctranscribecallanalyticscategories.DataAwsccTranscribeCallAnalyticsCategories_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategories"

dataawscctranscribecallanalyticscategories.DataAwsccTranscribeCallAnalyticsCategories_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccTranscribeCallAnalyticsCategories resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccTranscribeCallAnalyticsCategories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccTranscribeCallAnalyticsCategories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/transcribe_call_analytics_categories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTranscribeCallAnalyticsCategories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategories.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTranscribeCallAnalyticsCategoriesConfig <a name="DataAwsccTranscribeCallAnalyticsCategoriesConfig" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscctranscribecallanalyticscategories"

&dataawscctranscribecallanalyticscategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccTranscribeCallAnalyticsCategories.DataAwsccTranscribeCallAnalyticsCategoriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---



