# `dataAwsccOsisPipeline` Submodule <a name="`dataAwsccOsisPipeline` Submodule" id="@cdktn/provider-awscc.dataAwsccOsisPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOsisPipeline <a name="DataAwsccOsisPipeline" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/osis_pipeline awscc_osis_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.NewDataAwsccOsisPipeline(scope Construct, id *string, config DataAwsccOsisPipelineConfig) DataAwsccOsisPipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig">DataAwsccOsisPipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig">DataAwsccOsisPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOsisPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.DataAwsccOsisPipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.DataAwsccOsisPipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.DataAwsccOsisPipeline_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.DataAwsccOsisPipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccOsisPipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccOsisPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccOsisPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/osis_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOsisPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.bufferOptions">BufferOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference">DataAwsccOsisPipelineBufferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.encryptionAtRestOptions">EncryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference">DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.ingestEndpointUrls">IngestEndpointUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.logPublishingOptions">LogPublishingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference">DataAwsccOsisPipelineLogPublishingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.maxUnits">MaxUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.minUnits">MinUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.pipelineArn">PipelineArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.pipelineConfigurationBody">PipelineConfigurationBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.pipelineName">PipelineName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.pipelineRoleArn">PipelineRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.resourcePolicy">ResourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference">DataAwsccOsisPipelineResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList">DataAwsccOsisPipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.vpcEndpoints">VpcEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList">DataAwsccOsisPipelineVpcEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.vpcEndpointService">VpcEndpointService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference">DataAwsccOsisPipelineVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `BufferOptions`<sup>Required</sup> <a name="BufferOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.bufferOptions"></a>

```go
func BufferOptions() DataAwsccOsisPipelineBufferOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference">DataAwsccOsisPipelineBufferOptionsOutputReference</a>

---

##### `EncryptionAtRestOptions`<sup>Required</sup> <a name="EncryptionAtRestOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.encryptionAtRestOptions"></a>

```go
func EncryptionAtRestOptions() DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference">DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference</a>

---

##### `IngestEndpointUrls`<sup>Required</sup> <a name="IngestEndpointUrls" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.ingestEndpointUrls"></a>

```go
func IngestEndpointUrls() *[]*string
```

- *Type:* *[]*string

---

##### `LogPublishingOptions`<sup>Required</sup> <a name="LogPublishingOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.logPublishingOptions"></a>

```go
func LogPublishingOptions() DataAwsccOsisPipelineLogPublishingOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference">DataAwsccOsisPipelineLogPublishingOptionsOutputReference</a>

---

##### `MaxUnits`<sup>Required</sup> <a name="MaxUnits" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.maxUnits"></a>

```go
func MaxUnits() *f64
```

- *Type:* *f64

---

##### `MinUnits`<sup>Required</sup> <a name="MinUnits" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.minUnits"></a>

```go
func MinUnits() *f64
```

- *Type:* *f64

---

##### `PipelineArn`<sup>Required</sup> <a name="PipelineArn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.pipelineArn"></a>

```go
func PipelineArn() *string
```

- *Type:* *string

---

##### `PipelineConfigurationBody`<sup>Required</sup> <a name="PipelineConfigurationBody" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.pipelineConfigurationBody"></a>

```go
func PipelineConfigurationBody() *string
```

- *Type:* *string

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.pipelineName"></a>

```go
func PipelineName() *string
```

- *Type:* *string

---

##### `PipelineRoleArn`<sup>Required</sup> <a name="PipelineRoleArn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.pipelineRoleArn"></a>

```go
func PipelineRoleArn() *string
```

- *Type:* *string

---

##### `ResourcePolicy`<sup>Required</sup> <a name="ResourcePolicy" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.resourcePolicy"></a>

```go
func ResourcePolicy() DataAwsccOsisPipelineResourcePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference">DataAwsccOsisPipelineResourcePolicyOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.tags"></a>

```go
func Tags() DataAwsccOsisPipelineTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList">DataAwsccOsisPipelineTagsList</a>

---

##### `VpcEndpoints`<sup>Required</sup> <a name="VpcEndpoints" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.vpcEndpoints"></a>

```go
func VpcEndpoints() DataAwsccOsisPipelineVpcEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList">DataAwsccOsisPipelineVpcEndpointsList</a>

---

##### `VpcEndpointService`<sup>Required</sup> <a name="VpcEndpointService" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.vpcEndpointService"></a>

```go
func VpcEndpointService() *string
```

- *Type:* *string

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.vpcOptions"></a>

```go
func VpcOptions() DataAwsccOsisPipelineVpcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference">DataAwsccOsisPipelineVpcOptionsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOsisPipelineBufferOptions <a name="DataAwsccOsisPipelineBufferOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

&dataawsccosispipeline.DataAwsccOsisPipelineBufferOptions {

}
```


### DataAwsccOsisPipelineConfig <a name="DataAwsccOsisPipelineConfig" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

&dataawsccosispipeline.DataAwsccOsisPipelineConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/osis_pipeline#id DataAwsccOsisPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOsisPipelineEncryptionAtRestOptions <a name="DataAwsccOsisPipelineEncryptionAtRestOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

&dataawsccosispipeline.DataAwsccOsisPipelineEncryptionAtRestOptions {

}
```


### DataAwsccOsisPipelineLogPublishingOptions <a name="DataAwsccOsisPipelineLogPublishingOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

&dataawsccosispipeline.DataAwsccOsisPipelineLogPublishingOptions {

}
```


### DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestination <a name="DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestination" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

&dataawsccosispipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestination {

}
```


### DataAwsccOsisPipelineResourcePolicy <a name="DataAwsccOsisPipelineResourcePolicy" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

&dataawsccosispipeline.DataAwsccOsisPipelineResourcePolicy {

}
```


### DataAwsccOsisPipelineTags <a name="DataAwsccOsisPipelineTags" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

&dataawsccosispipeline.DataAwsccOsisPipelineTags {

}
```


### DataAwsccOsisPipelineVpcEndpoints <a name="DataAwsccOsisPipelineVpcEndpoints" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

&dataawsccosispipeline.DataAwsccOsisPipelineVpcEndpoints {

}
```


### DataAwsccOsisPipelineVpcEndpointsVpcOptions <a name="DataAwsccOsisPipelineVpcEndpointsVpcOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

&dataawsccosispipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptions {

}
```


### DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions <a name="DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

&dataawsccosispipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions {

}
```


### DataAwsccOsisPipelineVpcOptions <a name="DataAwsccOsisPipelineVpcOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

&dataawsccosispipeline.DataAwsccOsisPipelineVpcOptions {

}
```


### DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptions <a name="DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

&dataawsccosispipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOsisPipelineBufferOptionsOutputReference <a name="DataAwsccOsisPipelineBufferOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.NewDataAwsccOsisPipelineBufferOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOsisPipelineBufferOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabled">PersistentBufferEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptions">DataAwsccOsisPipelineBufferOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PersistentBufferEnabled`<sup>Required</sup> <a name="PersistentBufferEnabled" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabled"></a>

```go
func PersistentBufferEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOsisPipelineBufferOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineBufferOptions">DataAwsccOsisPipelineBufferOptions</a>

---


### DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference <a name="DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.NewDataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptions">DataAwsccOsisPipelineEncryptionAtRestOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOsisPipelineEncryptionAtRestOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineEncryptionAtRestOptions">DataAwsccOsisPipelineEncryptionAtRestOptions</a>

---


### DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference <a name="DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.NewDataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestination">DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestination">DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

---


### DataAwsccOsisPipelineLogPublishingOptionsOutputReference <a name="DataAwsccOsisPipelineLogPublishingOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.NewDataAwsccOsisPipelineLogPublishingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOsisPipelineLogPublishingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestination">CloudwatchLogDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference">DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabled">IsLoggingEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptions">DataAwsccOsisPipelineLogPublishingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogDestination`<sup>Required</sup> <a name="CloudwatchLogDestination" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestination"></a>

```go
func CloudwatchLogDestination() DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference">DataAwsccOsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference</a>

---

##### `IsLoggingEnabled`<sup>Required</sup> <a name="IsLoggingEnabled" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabled"></a>

```go
func IsLoggingEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOsisPipelineLogPublishingOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineLogPublishingOptions">DataAwsccOsisPipelineLogPublishingOptions</a>

---


### DataAwsccOsisPipelineResourcePolicyOutputReference <a name="DataAwsccOsisPipelineResourcePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.NewDataAwsccOsisPipelineResourcePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOsisPipelineResourcePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicy">DataAwsccOsisPipelineResourcePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOsisPipelineResourcePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineResourcePolicy">DataAwsccOsisPipelineResourcePolicy</a>

---


### DataAwsccOsisPipelineTagsList <a name="DataAwsccOsisPipelineTagsList" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.NewDataAwsccOsisPipelineTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccOsisPipelineTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.get"></a>

```go
func Get(index *f64) DataAwsccOsisPipelineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccOsisPipelineTagsOutputReference <a name="DataAwsccOsisPipelineTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.NewDataAwsccOsisPipelineTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccOsisPipelineTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTags">DataAwsccOsisPipelineTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOsisPipelineTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineTags">DataAwsccOsisPipelineTags</a>

---


### DataAwsccOsisPipelineVpcEndpointsList <a name="DataAwsccOsisPipelineVpcEndpointsList" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.NewDataAwsccOsisPipelineVpcEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccOsisPipelineVpcEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.get"></a>

```go
func Get(index *f64) DataAwsccOsisPipelineVpcEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccOsisPipelineVpcEndpointsOutputReference <a name="DataAwsccOsisPipelineVpcEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.NewDataAwsccOsisPipelineVpcEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccOsisPipelineVpcEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference">DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpoints">DataAwsccOsisPipelineVpcEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.property.vpcOptions"></a>

```go
func VpcOptions() DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference">DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOsisPipelineVpcEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpoints">DataAwsccOsisPipelineVpcEndpoints</a>

---


### DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference <a name="DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.NewDataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcAttachmentOptions">VpcAttachmentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference">DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcEndpointManagement">VpcEndpointManagement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptions">DataAwsccOsisPipelineVpcEndpointsVpcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcAttachmentOptions`<sup>Required</sup> <a name="VpcAttachmentOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcAttachmentOptions"></a>

```go
func VpcAttachmentOptions() DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference">DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference</a>

---

##### `VpcEndpointManagement`<sup>Required</sup> <a name="VpcEndpointManagement" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcEndpointManagement"></a>

```go
func VpcEndpointManagement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOsisPipelineVpcEndpointsVpcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptions">DataAwsccOsisPipelineVpcEndpointsVpcOptions</a>

---


### DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference <a name="DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.NewDataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc">AttachToVpc</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions">DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachToVpc`<sup>Required</sup> <a name="AttachToVpc" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc"></a>

```go
func AttachToVpc() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions">DataAwsccOsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions</a>

---


### DataAwsccOsisPipelineVpcOptionsOutputReference <a name="DataAwsccOsisPipelineVpcOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.NewDataAwsccOsisPipelineVpcOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOsisPipelineVpcOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptions">VpcAttachmentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference">DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagement">VpcEndpointManagement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptions">DataAwsccOsisPipelineVpcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcAttachmentOptions`<sup>Required</sup> <a name="VpcAttachmentOptions" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptions"></a>

```go
func VpcAttachmentOptions() DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference">DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference</a>

---

##### `VpcEndpointManagement`<sup>Required</sup> <a name="VpcEndpointManagement" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagement"></a>

```go
func VpcEndpointManagement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOsisPipelineVpcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptions">DataAwsccOsisPipelineVpcOptions</a>

---


### DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference <a name="DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccosispipeline"

dataawsccosispipeline.NewDataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc">AttachToVpc</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptions">DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachToVpc`<sup>Required</sup> <a name="AttachToVpc" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc"></a>

```go
func AttachToVpc() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOsisPipeline.DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptions">DataAwsccOsisPipelineVpcOptionsVpcAttachmentOptions</a>

---



