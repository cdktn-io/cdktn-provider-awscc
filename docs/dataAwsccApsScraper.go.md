# `dataAwsccApsScraper` Submodule <a name="`dataAwsccApsScraper` Submodule" id="@cdktn/provider-awscc.dataAwsccApsScraper"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApsScraper <a name="DataAwsccApsScraper" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/aps_scraper awscc_aps_scraper}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraper(scope Construct, id *string, config DataAwsccApsScraperConfig) DataAwsccApsScraper
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig">DataAwsccApsScraperConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig">DataAwsccApsScraperConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApsScraper resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.DataAwsccApsScraper_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.DataAwsccApsScraper_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.DataAwsccApsScraper_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.DataAwsccApsScraper_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccApsScraper resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccApsScraper to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccApsScraper that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/aps_scraper#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApsScraper to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference">DataAwsccApsScraperDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.roleConfiguration">RoleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference">DataAwsccApsScraperRoleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.scrapeConfiguration">ScrapeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference">DataAwsccApsScraperScrapeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.scraperId">ScraperId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.scraperLoggingConfiguration">ScraperLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference">DataAwsccApsScraperScraperLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference">DataAwsccApsScraperSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList">DataAwsccApsScraperTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.destination"></a>

```go
func Destination() DataAwsccApsScraperDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference">DataAwsccApsScraperDestinationOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `RoleConfiguration`<sup>Required</sup> <a name="RoleConfiguration" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.roleConfiguration"></a>

```go
func RoleConfiguration() DataAwsccApsScraperRoleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference">DataAwsccApsScraperRoleConfigurationOutputReference</a>

---

##### `ScrapeConfiguration`<sup>Required</sup> <a name="ScrapeConfiguration" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.scrapeConfiguration"></a>

```go
func ScrapeConfiguration() DataAwsccApsScraperScrapeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference">DataAwsccApsScraperScrapeConfigurationOutputReference</a>

---

##### `ScraperId`<sup>Required</sup> <a name="ScraperId" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.scraperId"></a>

```go
func ScraperId() *string
```

- *Type:* *string

---

##### `ScraperLoggingConfiguration`<sup>Required</sup> <a name="ScraperLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.scraperLoggingConfiguration"></a>

```go
func ScraperLoggingConfiguration() DataAwsccApsScraperScraperLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference">DataAwsccApsScraperScraperLoggingConfigurationOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.source"></a>

```go
func Source() DataAwsccApsScraperSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference">DataAwsccApsScraperSourceOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.tags"></a>

```go
func Tags() DataAwsccApsScraperTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList">DataAwsccApsScraperTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraper.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApsScraperConfig <a name="DataAwsccApsScraperConfig" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

&dataawsccapsscraper.DataAwsccApsScraperConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/aps_scraper#id DataAwsccApsScraper#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApsScraperDestination <a name="DataAwsccApsScraperDestination" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

&dataawsccapsscraper.DataAwsccApsScraperDestination {

}
```


### DataAwsccApsScraperDestinationAmpConfiguration <a name="DataAwsccApsScraperDestinationAmpConfiguration" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

&dataawsccapsscraper.DataAwsccApsScraperDestinationAmpConfiguration {

}
```


### DataAwsccApsScraperDestinationCloudwatchConfiguration <a name="DataAwsccApsScraperDestinationCloudwatchConfiguration" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

&dataawsccapsscraper.DataAwsccApsScraperDestinationCloudwatchConfiguration {

}
```


### DataAwsccApsScraperRoleConfiguration <a name="DataAwsccApsScraperRoleConfiguration" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

&dataawsccapsscraper.DataAwsccApsScraperRoleConfiguration {

}
```


### DataAwsccApsScraperScrapeConfiguration <a name="DataAwsccApsScraperScrapeConfiguration" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

&dataawsccapsscraper.DataAwsccApsScraperScrapeConfiguration {

}
```


### DataAwsccApsScraperScraperLoggingConfiguration <a name="DataAwsccApsScraperScraperLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

&dataawsccapsscraper.DataAwsccApsScraperScraperLoggingConfiguration {

}
```


### DataAwsccApsScraperScraperLoggingConfigurationLoggingDestination <a name="DataAwsccApsScraperScraperLoggingConfigurationLoggingDestination" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

&dataawsccapsscraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestination {

}
```


### DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs <a name="DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

&dataawsccapsscraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs {

}
```


### DataAwsccApsScraperScraperLoggingConfigurationScraperComponents <a name="DataAwsccApsScraperScraperLoggingConfigurationScraperComponents" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

&dataawsccapsscraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponents {

}
```


### DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfig <a name="DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfig" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

&dataawsccapsscraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfig {

}
```


### DataAwsccApsScraperSource <a name="DataAwsccApsScraperSource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

&dataawsccapsscraper.DataAwsccApsScraperSource {

}
```


### DataAwsccApsScraperSourceEksConfiguration <a name="DataAwsccApsScraperSourceEksConfiguration" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

&dataawsccapsscraper.DataAwsccApsScraperSourceEksConfiguration {

}
```


### DataAwsccApsScraperSourceVpcConfiguration <a name="DataAwsccApsScraperSourceVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

&dataawsccapsscraper.DataAwsccApsScraperSourceVpcConfiguration {

}
```


### DataAwsccApsScraperTags <a name="DataAwsccApsScraperTags" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

&dataawsccapsscraper.DataAwsccApsScraperTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApsScraperDestinationAmpConfigurationOutputReference <a name="DataAwsccApsScraperDestinationAmpConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperDestinationAmpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsScraperDestinationAmpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.property.workspaceArn">WorkspaceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfiguration">DataAwsccApsScraperDestinationAmpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkspaceArn`<sup>Required</sup> <a name="WorkspaceArn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.property.workspaceArn"></a>

```go
func WorkspaceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsScraperDestinationAmpConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfiguration">DataAwsccApsScraperDestinationAmpConfiguration</a>

---


### DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference <a name="DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.property.datasetArn">DatasetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfiguration">DataAwsccApsScraperDestinationCloudwatchConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatasetArn`<sup>Required</sup> <a name="DatasetArn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.property.datasetArn"></a>

```go
func DatasetArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsScraperDestinationCloudwatchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfiguration">DataAwsccApsScraperDestinationCloudwatchConfiguration</a>

---


### DataAwsccApsScraperDestinationOutputReference <a name="DataAwsccApsScraperDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsScraperDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.property.ampConfiguration">AmpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference">DataAwsccApsScraperDestinationAmpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.property.cloudwatchConfiguration">CloudwatchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference">DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestination">DataAwsccApsScraperDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmpConfiguration`<sup>Required</sup> <a name="AmpConfiguration" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.property.ampConfiguration"></a>

```go
func AmpConfiguration() DataAwsccApsScraperDestinationAmpConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationAmpConfigurationOutputReference">DataAwsccApsScraperDestinationAmpConfigurationOutputReference</a>

---

##### `CloudwatchConfiguration`<sup>Required</sup> <a name="CloudwatchConfiguration" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.property.cloudwatchConfiguration"></a>

```go
func CloudwatchConfiguration() DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference">DataAwsccApsScraperDestinationCloudwatchConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsScraperDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperDestination">DataAwsccApsScraperDestination</a>

---


### DataAwsccApsScraperRoleConfigurationOutputReference <a name="DataAwsccApsScraperRoleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperRoleConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsScraperRoleConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.property.sourceRoleArn">SourceRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.property.targetRoleArn">TargetRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfiguration">DataAwsccApsScraperRoleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceRoleArn`<sup>Required</sup> <a name="SourceRoleArn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.property.sourceRoleArn"></a>

```go
func SourceRoleArn() *string
```

- *Type:* *string

---

##### `TargetRoleArn`<sup>Required</sup> <a name="TargetRoleArn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.property.targetRoleArn"></a>

```go
func TargetRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsScraperRoleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperRoleConfiguration">DataAwsccApsScraperRoleConfiguration</a>

---


### DataAwsccApsScraperScrapeConfigurationOutputReference <a name="DataAwsccApsScraperScrapeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperScrapeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsScraperScrapeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.property.configurationBlob">ConfigurationBlob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfiguration">DataAwsccApsScraperScrapeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigurationBlob`<sup>Required</sup> <a name="ConfigurationBlob" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.property.configurationBlob"></a>

```go
func ConfigurationBlob() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsScraperScrapeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScrapeConfiguration">DataAwsccApsScraperScrapeConfiguration</a>

---


### DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference <a name="DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn"></a>

```go
func LogGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

---


### DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference <a name="DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference">DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestination">DataAwsccApsScraperScraperLoggingConfigurationLoggingDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference">DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsScraperScraperLoggingConfigurationLoggingDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestination">DataAwsccApsScraperScraperLoggingConfigurationLoggingDestination</a>

---


### DataAwsccApsScraperScraperLoggingConfigurationOutputReference <a name="DataAwsccApsScraperScraperLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperScraperLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsScraperScraperLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.property.loggingDestination">LoggingDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference">DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.property.scraperComponents">ScraperComponents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList">DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfiguration">DataAwsccApsScraperScraperLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoggingDestination`<sup>Required</sup> <a name="LoggingDestination" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.property.loggingDestination"></a>

```go
func LoggingDestination() DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference">DataAwsccApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference</a>

---

##### `ScraperComponents`<sup>Required</sup> <a name="ScraperComponents" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.property.scraperComponents"></a>

```go
func ScraperComponents() DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList">DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsScraperScraperLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfiguration">DataAwsccApsScraperScraperLoggingConfiguration</a>

---


### DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference <a name="DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.options">Options</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfig">DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.options"></a>

```go
func Options() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfig">DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfig</a>

---


### DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList <a name="DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.get"></a>

```go
func Get(index *f64) DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference <a name="DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference">DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponents">DataAwsccApsScraperScraperLoggingConfigurationScraperComponents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.config"></a>

```go
func Config() DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference">DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsScraperScraperLoggingConfigurationScraperComponents
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperScraperLoggingConfigurationScraperComponents">DataAwsccApsScraperScraperLoggingConfigurationScraperComponents</a>

---


### DataAwsccApsScraperSourceEksConfigurationOutputReference <a name="DataAwsccApsScraperSourceEksConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperSourceEksConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsScraperSourceEksConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfiguration">DataAwsccApsScraperSourceEksConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.property.clusterArn"></a>

```go
func ClusterArn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsScraperSourceEksConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfiguration">DataAwsccApsScraperSourceEksConfiguration</a>

---


### DataAwsccApsScraperSourceOutputReference <a name="DataAwsccApsScraperSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsScraperSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.property.eksConfiguration">EksConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference">DataAwsccApsScraperSourceEksConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference">DataAwsccApsScraperSourceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSource">DataAwsccApsScraperSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EksConfiguration`<sup>Required</sup> <a name="EksConfiguration" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.property.eksConfiguration"></a>

```go
func EksConfiguration() DataAwsccApsScraperSourceEksConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceEksConfigurationOutputReference">DataAwsccApsScraperSourceEksConfigurationOutputReference</a>

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.property.vpcConfiguration"></a>

```go
func VpcConfiguration() DataAwsccApsScraperSourceVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference">DataAwsccApsScraperSourceVpcConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsScraperSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSource">DataAwsccApsScraperSource</a>

---


### DataAwsccApsScraperSourceVpcConfigurationOutputReference <a name="DataAwsccApsScraperSourceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperSourceVpcConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApsScraperSourceVpcConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfiguration">DataAwsccApsScraperSourceVpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsScraperSourceVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperSourceVpcConfiguration">DataAwsccApsScraperSourceVpcConfiguration</a>

---


### DataAwsccApsScraperTagsList <a name="DataAwsccApsScraperTagsList" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApsScraperTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.get"></a>

```go
func Get(index *f64) DataAwsccApsScraperTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApsScraperTagsOutputReference <a name="DataAwsccApsScraperTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapsscraper"

dataawsccapsscraper.NewDataAwsccApsScraperTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApsScraperTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTags">DataAwsccApsScraperTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApsScraperTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsScraper.DataAwsccApsScraperTags">DataAwsccApsScraperTags</a>

---



