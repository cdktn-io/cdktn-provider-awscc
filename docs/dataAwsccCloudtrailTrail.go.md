# `dataAwsccCloudtrailTrail` Submodule <a name="`dataAwsccCloudtrailTrail` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudtrailTrail <a name="DataAwsccCloudtrailTrail" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudtrail_trail awscc_cloudtrail_trail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.NewDataAwsccCloudtrailTrail(scope Construct, id *string, config DataAwsccCloudtrailTrailConfig) DataAwsccCloudtrailTrail
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig">DataAwsccCloudtrailTrailConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig">DataAwsccCloudtrailTrailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudtrailTrail resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.DataAwsccCloudtrailTrail_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.DataAwsccCloudtrailTrail_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.DataAwsccCloudtrailTrail_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.DataAwsccCloudtrailTrail_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCloudtrailTrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCloudtrailTrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCloudtrailTrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudtrail_trail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudtrailTrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.advancedEventSelectors">AdvancedEventSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList">DataAwsccCloudtrailTrailAdvancedEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.aggregationConfigurations">AggregationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList">DataAwsccCloudtrailTrailAggregationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.cloudwatchLogsLogGroupArn">CloudwatchLogsLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.cloudwatchLogsRoleArn">CloudwatchLogsRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.enableLogFileValidation">EnableLogFileValidation</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.eventSelectors">EventSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList">DataAwsccCloudtrailTrailEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.includeGlobalServiceEvents">IncludeGlobalServiceEvents</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.insightSelectors">InsightSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList">DataAwsccCloudtrailTrailInsightSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.isLogging">IsLogging</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.isMultiRegionTrail">IsMultiRegionTrail</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.isOrganizationTrail">IsOrganizationTrail</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.s3BucketName">S3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.snsTopicName">SnsTopicName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList">DataAwsccCloudtrailTrailTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.trailName">TrailName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AdvancedEventSelectors`<sup>Required</sup> <a name="AdvancedEventSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.advancedEventSelectors"></a>

```go
func AdvancedEventSelectors() DataAwsccCloudtrailTrailAdvancedEventSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList">DataAwsccCloudtrailTrailAdvancedEventSelectorsList</a>

---

##### `AggregationConfigurations`<sup>Required</sup> <a name="AggregationConfigurations" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.aggregationConfigurations"></a>

```go
func AggregationConfigurations() DataAwsccCloudtrailTrailAggregationConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList">DataAwsccCloudtrailTrailAggregationConfigurationsList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.cloudwatchLogsLogGroupArn"></a>

```go
func CloudwatchLogsLogGroupArn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsRoleArn`<sup>Required</sup> <a name="CloudwatchLogsRoleArn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.cloudwatchLogsRoleArn"></a>

```go
func CloudwatchLogsRoleArn() *string
```

- *Type:* *string

---

##### `EnableLogFileValidation`<sup>Required</sup> <a name="EnableLogFileValidation" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.enableLogFileValidation"></a>

```go
func EnableLogFileValidation() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EventSelectors`<sup>Required</sup> <a name="EventSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.eventSelectors"></a>

```go
func EventSelectors() DataAwsccCloudtrailTrailEventSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList">DataAwsccCloudtrailTrailEventSelectorsList</a>

---

##### `IncludeGlobalServiceEvents`<sup>Required</sup> <a name="IncludeGlobalServiceEvents" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.includeGlobalServiceEvents"></a>

```go
func IncludeGlobalServiceEvents() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InsightSelectors`<sup>Required</sup> <a name="InsightSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.insightSelectors"></a>

```go
func InsightSelectors() DataAwsccCloudtrailTrailInsightSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList">DataAwsccCloudtrailTrailInsightSelectorsList</a>

---

##### `IsLogging`<sup>Required</sup> <a name="IsLogging" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.isLogging"></a>

```go
func IsLogging() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsMultiRegionTrail`<sup>Required</sup> <a name="IsMultiRegionTrail" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.isMultiRegionTrail"></a>

```go
func IsMultiRegionTrail() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsOrganizationTrail`<sup>Required</sup> <a name="IsOrganizationTrail" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.isOrganizationTrail"></a>

```go
func IsOrganizationTrail() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.s3BucketName"></a>

```go
func S3BucketName() *string
```

- *Type:* *string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.s3KeyPrefix"></a>

```go
func S3KeyPrefix() *string
```

- *Type:* *string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.snsTopicArn"></a>

```go
func SnsTopicArn() *string
```

- *Type:* *string

---

##### `SnsTopicName`<sup>Required</sup> <a name="SnsTopicName" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.snsTopicName"></a>

```go
func SnsTopicName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.tags"></a>

```go
func Tags() DataAwsccCloudtrailTrailTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList">DataAwsccCloudtrailTrailTagsList</a>

---

##### `TrailName`<sup>Required</sup> <a name="TrailName" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.trailName"></a>

```go
func TrailName() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudtrailTrailAdvancedEventSelectors <a name="DataAwsccCloudtrailTrailAdvancedEventSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

&dataawscccloudtrailtrail.DataAwsccCloudtrailTrailAdvancedEventSelectors {

}
```


### DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors <a name="DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

&dataawscccloudtrailtrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors {

}
```


### DataAwsccCloudtrailTrailAggregationConfigurations <a name="DataAwsccCloudtrailTrailAggregationConfigurations" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

&dataawscccloudtrailtrail.DataAwsccCloudtrailTrailAggregationConfigurations {

}
```


### DataAwsccCloudtrailTrailConfig <a name="DataAwsccCloudtrailTrailConfig" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

&dataawscccloudtrailtrail.DataAwsccCloudtrailTrailConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudtrail_trail#id DataAwsccCloudtrailTrail#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudtrailTrailEventSelectors <a name="DataAwsccCloudtrailTrailEventSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

&dataawscccloudtrailtrail.DataAwsccCloudtrailTrailEventSelectors {

}
```


### DataAwsccCloudtrailTrailEventSelectorsDataResources <a name="DataAwsccCloudtrailTrailEventSelectorsDataResources" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

&dataawscccloudtrailtrail.DataAwsccCloudtrailTrailEventSelectorsDataResources {

}
```


### DataAwsccCloudtrailTrailInsightSelectors <a name="DataAwsccCloudtrailTrailInsightSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

&dataawscccloudtrailtrail.DataAwsccCloudtrailTrailInsightSelectors {

}
```


### DataAwsccCloudtrailTrailTags <a name="DataAwsccCloudtrailTrailTags" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

&dataawscccloudtrailtrail.DataAwsccCloudtrailTrailTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList <a name="DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.NewDataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference <a name="DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.NewDataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith">EndsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo">EqualTo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith">NotEndsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals">NotEquals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith">NotStartsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith">StartsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors">DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndsWith`<sup>Required</sup> <a name="EndsWith" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith"></a>

```go
func EndsWith() *[]*string
```

- *Type:* *[]*string

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo"></a>

```go
func EqualTo() *[]*string
```

- *Type:* *[]*string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `NotEndsWith`<sup>Required</sup> <a name="NotEndsWith" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith"></a>

```go
func NotEndsWith() *[]*string
```

- *Type:* *[]*string

---

##### `NotEquals`<sup>Required</sup> <a name="NotEquals" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals"></a>

```go
func NotEquals() *[]*string
```

- *Type:* *[]*string

---

##### `NotStartsWith`<sup>Required</sup> <a name="NotStartsWith" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith"></a>

```go
func NotStartsWith() *[]*string
```

- *Type:* *[]*string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith"></a>

```go
func StartsWith() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors">DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>

---


### DataAwsccCloudtrailTrailAdvancedEventSelectorsList <a name="DataAwsccCloudtrailTrailAdvancedEventSelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.NewDataAwsccCloudtrailTrailAdvancedEventSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudtrailTrailAdvancedEventSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference <a name="DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.NewDataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectors">FieldSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList">DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectors">DataAwsccCloudtrailTrailAdvancedEventSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldSelectors`<sup>Required</sup> <a name="FieldSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectors"></a>

```go
func FieldSelectors() DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList">DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudtrailTrailAdvancedEventSelectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectors">DataAwsccCloudtrailTrailAdvancedEventSelectors</a>

---


### DataAwsccCloudtrailTrailAggregationConfigurationsList <a name="DataAwsccCloudtrailTrailAggregationConfigurationsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.NewDataAwsccCloudtrailTrailAggregationConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudtrailTrailAggregationConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference <a name="DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.NewDataAwsccCloudtrailTrailAggregationConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategory">EventCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.templates">Templates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurations">DataAwsccCloudtrailTrailAggregationConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventCategory`<sup>Required</sup> <a name="EventCategory" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategory"></a>

```go
func EventCategory() *string
```

- *Type:* *string

---

##### `Templates`<sup>Required</sup> <a name="Templates" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.templates"></a>

```go
func Templates() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudtrailTrailAggregationConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurations">DataAwsccCloudtrailTrailAggregationConfigurations</a>

---


### DataAwsccCloudtrailTrailEventSelectorsDataResourcesList <a name="DataAwsccCloudtrailTrailEventSelectorsDataResourcesList" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.NewDataAwsccCloudtrailTrailEventSelectorsDataResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudtrailTrailEventSelectorsDataResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.get"></a>

```go
func Get(index *f64) DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference <a name="DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.NewDataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResources">DataAwsccCloudtrailTrailEventSelectorsDataResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudtrailTrailEventSelectorsDataResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResources">DataAwsccCloudtrailTrailEventSelectorsDataResources</a>

---


### DataAwsccCloudtrailTrailEventSelectorsList <a name="DataAwsccCloudtrailTrailEventSelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.NewDataAwsccCloudtrailTrailEventSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudtrailTrailEventSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudtrailTrailEventSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudtrailTrailEventSelectorsOutputReference <a name="DataAwsccCloudtrailTrailEventSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.NewDataAwsccCloudtrailTrailEventSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudtrailTrailEventSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.dataResources">DataResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList">DataAwsccCloudtrailTrailEventSelectorsDataResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSources">ExcludeManagementEventSources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.includeManagementEvents">IncludeManagementEvents</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.readWriteType">ReadWriteType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectors">DataAwsccCloudtrailTrailEventSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataResources`<sup>Required</sup> <a name="DataResources" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.dataResources"></a>

```go
func DataResources() DataAwsccCloudtrailTrailEventSelectorsDataResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList">DataAwsccCloudtrailTrailEventSelectorsDataResourcesList</a>

---

##### `ExcludeManagementEventSources`<sup>Required</sup> <a name="ExcludeManagementEventSources" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSources"></a>

```go
func ExcludeManagementEventSources() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeManagementEvents`<sup>Required</sup> <a name="IncludeManagementEvents" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.includeManagementEvents"></a>

```go
func IncludeManagementEvents() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ReadWriteType`<sup>Required</sup> <a name="ReadWriteType" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.readWriteType"></a>

```go
func ReadWriteType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudtrailTrailEventSelectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectors">DataAwsccCloudtrailTrailEventSelectors</a>

---


### DataAwsccCloudtrailTrailInsightSelectorsList <a name="DataAwsccCloudtrailTrailInsightSelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.NewDataAwsccCloudtrailTrailInsightSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudtrailTrailInsightSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudtrailTrailInsightSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudtrailTrailInsightSelectorsOutputReference <a name="DataAwsccCloudtrailTrailInsightSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.NewDataAwsccCloudtrailTrailInsightSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudtrailTrailInsightSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.eventCategories">EventCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.insightType">InsightType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectors">DataAwsccCloudtrailTrailInsightSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventCategories`<sup>Required</sup> <a name="EventCategories" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.eventCategories"></a>

```go
func EventCategories() *[]*string
```

- *Type:* *[]*string

---

##### `InsightType`<sup>Required</sup> <a name="InsightType" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.insightType"></a>

```go
func InsightType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudtrailTrailInsightSelectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectors">DataAwsccCloudtrailTrailInsightSelectors</a>

---


### DataAwsccCloudtrailTrailTagsList <a name="DataAwsccCloudtrailTrailTagsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.NewDataAwsccCloudtrailTrailTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudtrailTrailTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudtrailTrailTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudtrailTrailTagsOutputReference <a name="DataAwsccCloudtrailTrailTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudtrailtrail"

dataawscccloudtrailtrail.NewDataAwsccCloudtrailTrailTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudtrailTrailTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTags">DataAwsccCloudtrailTrailTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudtrailTrailTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTags">DataAwsccCloudtrailTrailTags</a>

---



