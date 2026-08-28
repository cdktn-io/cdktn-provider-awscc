# `dataAwsccCodepipelinePipeline` Submodule <a name="`dataAwsccCodepipelinePipeline` Submodule" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodepipelinePipeline <a name="DataAwsccCodepipelinePipeline" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codepipeline_pipeline awscc_codepipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipeline(scope Construct, id *string, config DataAwsccCodepipelinePipelineConfig) DataAwsccCodepipelinePipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig">DataAwsccCodepipelinePipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig">DataAwsccCodepipelinePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCodepipelinePipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.DataAwsccCodepipelinePipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.DataAwsccCodepipelinePipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.DataAwsccCodepipelinePipeline_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.DataAwsccCodepipelinePipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCodepipelinePipeline resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCodepipelinePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCodepipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codepipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodepipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStore">ArtifactStore</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStores">ArtifactStores</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList">DataAwsccCodepipelinePipelineArtifactStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.disableInboundStageTransitions">DisableInboundStageTransitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList">DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.executionMode">ExecutionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.pipelineType">PipelineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.restartExecutionOnUpdate">RestartExecutionOnUpdate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.stages">Stages</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList">DataAwsccCodepipelinePipelineStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList">DataAwsccCodepipelinePipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.triggers">Triggers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList">DataAwsccCodepipelinePipelineTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList">DataAwsccCodepipelinePipelineVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ArtifactStore`<sup>Required</sup> <a name="ArtifactStore" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStore"></a>

```go
func ArtifactStore() DataAwsccCodepipelinePipelineArtifactStoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoreOutputReference</a>

---

##### `ArtifactStores`<sup>Required</sup> <a name="ArtifactStores" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.artifactStores"></a>

```go
func ArtifactStores() DataAwsccCodepipelinePipelineArtifactStoresList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList">DataAwsccCodepipelinePipelineArtifactStoresList</a>

---

##### `DisableInboundStageTransitions`<sup>Required</sup> <a name="DisableInboundStageTransitions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.disableInboundStageTransitions"></a>

```go
func DisableInboundStageTransitions() DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList">DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList</a>

---

##### `ExecutionMode`<sup>Required</sup> <a name="ExecutionMode" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.executionMode"></a>

```go
func ExecutionMode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PipelineType`<sup>Required</sup> <a name="PipelineType" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.pipelineType"></a>

```go
func PipelineType() *string
```

- *Type:* *string

---

##### `RestartExecutionOnUpdate`<sup>Required</sup> <a name="RestartExecutionOnUpdate" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.restartExecutionOnUpdate"></a>

```go
func RestartExecutionOnUpdate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.stages"></a>

```go
func Stages() DataAwsccCodepipelinePipelineStagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList">DataAwsccCodepipelinePipelineStagesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tags"></a>

```go
func Tags() DataAwsccCodepipelinePipelineTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList">DataAwsccCodepipelinePipelineTagsList</a>

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.triggers"></a>

```go
func Triggers() DataAwsccCodepipelinePipelineTriggersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList">DataAwsccCodepipelinePipelineTriggersList</a>

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.variables"></a>

```go
func Variables() DataAwsccCodepipelinePipelineVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList">DataAwsccCodepipelinePipelineVariablesList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodepipelinePipelineArtifactStore <a name="DataAwsccCodepipelinePipelineArtifactStore" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineArtifactStore {

}
```


### DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey <a name="DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey {

}
```


### DataAwsccCodepipelinePipelineArtifactStores <a name="DataAwsccCodepipelinePipelineArtifactStores" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineArtifactStores {

}
```


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStore <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStore" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore {

}
```


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey {

}
```


### DataAwsccCodepipelinePipelineConfig <a name="DataAwsccCodepipelinePipelineConfig" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codepipeline_pipeline#id DataAwsccCodepipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodepipelinePipelineDisableInboundStageTransitions <a name="DataAwsccCodepipelinePipelineDisableInboundStageTransitions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions {

}
```


### DataAwsccCodepipelinePipelineStages <a name="DataAwsccCodepipelinePipelineStages" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStages {

}
```


### DataAwsccCodepipelinePipelineStagesActions <a name="DataAwsccCodepipelinePipelineStagesActions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesActions {

}
```


### DataAwsccCodepipelinePipelineStagesActionsActionTypeId <a name="DataAwsccCodepipelinePipelineStagesActionsActionTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId {

}
```


### DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables <a name="DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables {

}
```


### DataAwsccCodepipelinePipelineStagesActionsInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesActionsInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts {

}
```


### DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts <a name="DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts {

}
```


### DataAwsccCodepipelinePipelineStagesBeforeEntry <a name="DataAwsccCodepipelinePipelineStagesBeforeEntry" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry {

}
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditions <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions {

}
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules {

}
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts {

}
```


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId {

}
```


### DataAwsccCodepipelinePipelineStagesBlockers <a name="DataAwsccCodepipelinePipelineStagesBlockers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesBlockers {

}
```


### DataAwsccCodepipelinePipelineStagesOnFailure <a name="DataAwsccCodepipelinePipelineStagesOnFailure" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesOnFailure {

}
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditions <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions {

}
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules {

}
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts {

}
```


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId {

}
```


### DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration <a name="DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration {

}
```


### DataAwsccCodepipelinePipelineStagesOnSuccess <a name="DataAwsccCodepipelinePipelineStagesOnSuccess" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesOnSuccess {

}
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditions <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions {

}
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules {

}
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts {

}
```


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId {

}
```


### DataAwsccCodepipelinePipelineTags <a name="DataAwsccCodepipelinePipelineTags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineTags {

}
```


### DataAwsccCodepipelinePipelineTriggers <a name="DataAwsccCodepipelinePipelineTriggers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineTriggers {

}
```


### DataAwsccCodepipelinePipelineTriggersGitConfiguration <a name="DataAwsccCodepipelinePipelineTriggersGitConfiguration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration {

}
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest {

}
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches {

}
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths {

}
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPush <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPush" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush {

}
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches {

}
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths {

}
```


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags {

}
```


### DataAwsccCodepipelinePipelineVariables <a name="DataAwsccCodepipelinePipelineVariables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

&dataawscccodepipelinepipeline.DataAwsccCodepipelinePipelineVariables {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKey</a>

---


### DataAwsccCodepipelinePipelineArtifactStoreOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoreOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineArtifactStoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineArtifactStoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore">DataAwsccCodepipelinePipelineArtifactStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoreEncryptionKeyOutputReference</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoreOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineArtifactStore
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStore">DataAwsccCodepipelinePipelineArtifactStore</a>

---


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKey</a>

---


### DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore">DataAwsccCodepipelinePipelineArtifactStoresArtifactStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreEncryptionKeyOutputReference</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineArtifactStoresArtifactStore
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStore">DataAwsccCodepipelinePipelineArtifactStoresArtifactStore</a>

---


### DataAwsccCodepipelinePipelineArtifactStoresList <a name="DataAwsccCodepipelinePipelineArtifactStoresList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineArtifactStoresList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineArtifactStoresList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineArtifactStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineArtifactStoresOutputReference <a name="DataAwsccCodepipelinePipelineArtifactStoresOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineArtifactStoresOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineArtifactStoresOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.artifactStore">ArtifactStore</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores">DataAwsccCodepipelinePipelineArtifactStores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArtifactStore`<sup>Required</sup> <a name="ArtifactStore" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.artifactStore"></a>

```go
func ArtifactStore() DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference">DataAwsccCodepipelinePipelineArtifactStoresArtifactStoreOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStoresOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineArtifactStores
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineArtifactStores">DataAwsccCodepipelinePipelineArtifactStores</a>

---


### DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList <a name="DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineDisableInboundStageTransitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference <a name="DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.stageName">StageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions">DataAwsccCodepipelinePipelineDisableInboundStageTransitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.stageName"></a>

```go
func StageName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineDisableInboundStageTransitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineDisableInboundStageTransitions">DataAwsccCodepipelinePipelineDisableInboundStageTransitions</a>

---


### DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.provider">Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId">DataAwsccCodepipelinePipelineStagesActionsActionTypeId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.provider"></a>

```go
func Provider() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesActionsActionTypeId
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeId">DataAwsccCodepipelinePipelineStagesActionsActionTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList <a name="DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariables</a>

---


### DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesActionsInputArtifactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts">DataAwsccCodepipelinePipelineStagesActionsInputArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesActionsInputArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifacts">DataAwsccCodepipelinePipelineStagesActionsInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesActionsList <a name="DataAwsccCodepipelinePipelineStagesActionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineStagesActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineStagesActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.files">Files</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts">DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.files"></a>

```go
func Files() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts">DataAwsccCodepipelinePipelineStagesActionsOutputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesActionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineStagesActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.actionTypeId">ActionTypeId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.commands">Commands</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.configuration">Configuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.inputArtifacts">InputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputArtifacts">OutputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputVariables">OutputVariables</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.runOrder">RunOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.timeoutInMinutes">TimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions">DataAwsccCodepipelinePipelineStagesActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionTypeId`<sup>Required</sup> <a name="ActionTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.actionTypeId"></a>

```go
func ActionTypeId() DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesActionsActionTypeIdOutputReference</a>

---

##### `Commands`<sup>Required</sup> <a name="Commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.commands"></a>

```go
func Commands() *[]*string
```

- *Type:* *[]*string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.configuration"></a>

```go
func Configuration() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList">DataAwsccCodepipelinePipelineStagesActionsEnvironmentVariablesList</a>

---

##### `InputArtifacts`<sup>Required</sup> <a name="InputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.inputArtifacts"></a>

```go
func InputArtifacts() DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsInputArtifactsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OutputArtifacts`<sup>Required</sup> <a name="OutputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputArtifacts"></a>

```go
func OutputArtifacts() DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList">DataAwsccCodepipelinePipelineStagesActionsOutputArtifactsList</a>

---

##### `OutputVariables`<sup>Required</sup> <a name="OutputVariables" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.outputVariables"></a>

```go
func OutputVariables() *[]*string
```

- *Type:* *[]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `RunOrder`<sup>Required</sup> <a name="RunOrder" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.runOrder"></a>

```go
func RunOrder() *f64
```

- *Type:* *f64

---

##### `TimeoutInMinutes`<sup>Required</sup> <a name="TimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.timeoutInMinutes"></a>

```go
func TimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActions">DataAwsccCodepipelinePipelineStagesActions</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.result">Result</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions">DataAwsccCodepipelinePipelineStagesBeforeEntryConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.result"></a>

```go
func Result() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.rules"></a>

```go
func Rules() DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesBeforeEntryConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditions">DataAwsccCodepipelinePipelineStagesBeforeEntryConditions</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.commands">Commands</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.configuration">Configuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.inputArtifacts">InputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.ruleTypeId">RuleTypeId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Commands`<sup>Required</sup> <a name="Commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.commands"></a>

```go
func Commands() *[]*string
```

- *Type:* *[]*string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.configuration"></a>

```go
func Configuration() *string
```

- *Type:* *string

---

##### `InputArtifacts`<sup>Required</sup> <a name="InputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.inputArtifacts"></a>

```go
func InputArtifacts() DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesInputArtifactsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `RuleTypeId`<sup>Required</sup> <a name="RuleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.ruleTypeId"></a>

```go
func RuleTypeId() DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRules</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.provider">Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.provider"></a>

```go
func Provider() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeIdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsRulesRuleTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference <a name="DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry">DataAwsccCodepipelinePipelineStagesBeforeEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.conditions"></a>

```go
func Conditions() DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList">DataAwsccCodepipelinePipelineStagesBeforeEntryConditionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesBeforeEntry
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntry">DataAwsccCodepipelinePipelineStagesBeforeEntry</a>

---


### DataAwsccCodepipelinePipelineStagesBlockersList <a name="DataAwsccCodepipelinePipelineStagesBlockersList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesBlockersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineStagesBlockersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineStagesBlockersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineStagesBlockersOutputReference <a name="DataAwsccCodepipelinePipelineStagesBlockersOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesBlockersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineStagesBlockersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers">DataAwsccCodepipelinePipelineStagesBlockers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesBlockers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockers">DataAwsccCodepipelinePipelineStagesBlockers</a>

---


### DataAwsccCodepipelinePipelineStagesList <a name="DataAwsccCodepipelinePipelineStagesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineStagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsList <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnFailureConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineStagesOnFailureConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.result">Result</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions">DataAwsccCodepipelinePipelineStagesOnFailureConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.result"></a>

```go
func Result() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.rules"></a>

```go
func Rules() DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesOnFailureConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditions">DataAwsccCodepipelinePipelineStagesOnFailureConditions</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.commands">Commands</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.configuration">Configuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.inputArtifacts">InputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.ruleTypeId">RuleTypeId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Commands`<sup>Required</sup> <a name="Commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.commands"></a>

```go
func Commands() *[]*string
```

- *Type:* *[]*string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.configuration"></a>

```go
func Configuration() *string
```

- *Type:* *string

---

##### `InputArtifacts`<sup>Required</sup> <a name="InputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.inputArtifacts"></a>

```go
func InputArtifacts() DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesInputArtifactsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `RuleTypeId`<sup>Required</sup> <a name="RuleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.ruleTypeId"></a>

```go
func RuleTypeId() DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRules</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.provider">Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.provider"></a>

```go
func Provider() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeIdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnFailureConditionsRulesRuleTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnFailureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineStagesOnFailureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.result">Result</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.retryConfiguration">RetryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure">DataAwsccCodepipelinePipelineStagesOnFailure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.conditions"></a>

```go
func Conditions() DataAwsccCodepipelinePipelineStagesOnFailureConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureConditionsList">DataAwsccCodepipelinePipelineStagesOnFailureConditionsList</a>

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.result"></a>

```go
func Result() *string
```

- *Type:* *string

---

##### `RetryConfiguration`<sup>Required</sup> <a name="RetryConfiguration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.retryConfiguration"></a>

```go
func RetryConfiguration() DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesOnFailure
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailure">DataAwsccCodepipelinePipelineStagesOnFailure</a>

---


### DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.retryMode">RetryMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetryMode`<sup>Required</sup> <a name="RetryMode" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.retryMode"></a>

```go
func RetryMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration">DataAwsccCodepipelinePipelineStagesOnFailureRetryConfiguration</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnSuccessConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.result">Result</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions">DataAwsccCodepipelinePipelineStagesOnSuccessConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.result"></a>

```go
func Result() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.rules"></a>

```go
func Rules() DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesOnSuccessConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditions">DataAwsccCodepipelinePipelineStagesOnSuccessConditions</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifacts</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.commands">Commands</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.configuration">Configuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.inputArtifacts">InputArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.ruleTypeId">RuleTypeId</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Commands`<sup>Required</sup> <a name="Commands" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.commands"></a>

```go
func Commands() *[]*string
```

- *Type:* *[]*string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.configuration"></a>

```go
func Configuration() *string
```

- *Type:* *string

---

##### `InputArtifacts`<sup>Required</sup> <a name="InputArtifacts" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.inputArtifacts"></a>

```go
func InputArtifacts() DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesInputArtifactsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `RuleTypeId`<sup>Required</sup> <a name="RuleTypeId" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.ruleTypeId"></a>

```go
func RuleTypeId() DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRules</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.provider">Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.provider"></a>

```go
func Provider() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeIdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsRulesRuleTypeId</a>

---


### DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference <a name="DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOnSuccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess">DataAwsccCodepipelinePipelineStagesOnSuccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.conditions"></a>

```go
func Conditions() DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList">DataAwsccCodepipelinePipelineStagesOnSuccessConditionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStagesOnSuccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccess">DataAwsccCodepipelinePipelineStagesOnSuccess</a>

---


### DataAwsccCodepipelinePipelineStagesOutputReference <a name="DataAwsccCodepipelinePipelineStagesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineStagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineStagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList">DataAwsccCodepipelinePipelineStagesActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.beforeEntry">BeforeEntry</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.blockers">Blockers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList">DataAwsccCodepipelinePipelineStagesBlockersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onSuccess">OnSuccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages">DataAwsccCodepipelinePipelineStages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.actions"></a>

```go
func Actions() DataAwsccCodepipelinePipelineStagesActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesActionsList">DataAwsccCodepipelinePipelineStagesActionsList</a>

---

##### `BeforeEntry`<sup>Required</sup> <a name="BeforeEntry" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.beforeEntry"></a>

```go
func BeforeEntry() DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference">DataAwsccCodepipelinePipelineStagesBeforeEntryOutputReference</a>

---

##### `Blockers`<sup>Required</sup> <a name="Blockers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.blockers"></a>

```go
func Blockers() DataAwsccCodepipelinePipelineStagesBlockersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesBlockersList">DataAwsccCodepipelinePipelineStagesBlockersList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onFailure"></a>

```go
func OnFailure() DataAwsccCodepipelinePipelineStagesOnFailureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnFailureOutputReference">DataAwsccCodepipelinePipelineStagesOnFailureOutputReference</a>

---

##### `OnSuccess`<sup>Required</sup> <a name="OnSuccess" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.onSuccess"></a>

```go
func OnSuccess() DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference">DataAwsccCodepipelinePipelineStagesOnSuccessOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineStages
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineStages">DataAwsccCodepipelinePipelineStages</a>

---


### DataAwsccCodepipelinePipelineTagsList <a name="DataAwsccCodepipelinePipelineTagsList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineTagsOutputReference <a name="DataAwsccCodepipelinePipelineTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags">DataAwsccCodepipelinePipelineTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTags">DataAwsccCodepipelinePipelineTags</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.push">Push</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.sourceActionName">SourceActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration">DataAwsccCodepipelinePipelineTriggersGitConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PullRequest`<sup>Required</sup> <a name="PullRequest" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.pullRequest"></a>

```go
func PullRequest() DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList</a>

---

##### `Push`<sup>Required</sup> <a name="Push" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.push"></a>

```go
func Push() DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList</a>

---

##### `SourceActionName`<sup>Required</sup> <a name="SourceActionName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.sourceActionName"></a>

```go
func SourceActionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineTriggersGitConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfiguration">DataAwsccCodepipelinePipelineTriggersGitConfiguration</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.excludes">Excludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.includes">Includes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.excludes"></a>

```go
func Excludes() *[]*string
```

- *Type:* *[]*string

---

##### `Includes`<sup>Required</sup> <a name="Includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.includes"></a>

```go
func Includes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranches</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.excludes">Excludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.includes">Includes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.excludes"></a>

```go
func Excludes() *[]*string
```

- *Type:* *[]*string

---

##### `Includes`<sup>Required</sup> <a name="Includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.includes"></a>

```go
func Includes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePaths</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.branches">Branches</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.events">Events</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.filePaths">FilePaths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Branches`<sup>Required</sup> <a name="Branches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.branches"></a>

```go
func Branches() DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestBranchesOutputReference</a>

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.events"></a>

```go
func Events() *[]*string
```

- *Type:* *[]*string

---

##### `FilePaths`<sup>Required</sup> <a name="FilePaths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.filePaths"></a>

```go
func FilePaths() DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestFilePathsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest">DataAwsccCodepipelinePipelineTriggersGitConfigurationPullRequest</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.excludes">Excludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.includes">Includes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.excludes"></a>

```go
func Excludes() *[]*string
```

- *Type:* *[]*string

---

##### `Includes`<sup>Required</sup> <a name="Includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.includes"></a>

```go
func Includes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranches</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.excludes">Excludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.includes">Includes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.excludes"></a>

```go
func Excludes() *[]*string
```

- *Type:* *[]*string

---

##### `Includes`<sup>Required</sup> <a name="Includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.includes"></a>

```go
func Includes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePaths</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineTriggersGitConfigurationPushList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.branches">Branches</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.filePaths">FilePaths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush">DataAwsccCodepipelinePipelineTriggersGitConfigurationPush</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Branches`<sup>Required</sup> <a name="Branches" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.branches"></a>

```go
func Branches() DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushBranchesOutputReference</a>

---

##### `FilePaths`<sup>Required</sup> <a name="FilePaths" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.filePaths"></a>

```go
func FilePaths() DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushFilePathsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.tags"></a>

```go
func Tags() DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineTriggersGitConfigurationPush
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPush">DataAwsccCodepipelinePipelineTriggersGitConfigurationPush</a>

---


### DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference <a name="DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.excludes">Excludes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.includes">Includes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Excludes`<sup>Required</sup> <a name="Excludes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.excludes"></a>

```go
func Excludes() *[]*string
```

- *Type:* *[]*string

---

##### `Includes`<sup>Required</sup> <a name="Includes" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.includes"></a>

```go
func Includes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags">DataAwsccCodepipelinePipelineTriggersGitConfigurationPushTags</a>

---


### DataAwsccCodepipelinePipelineTriggersList <a name="DataAwsccCodepipelinePipelineTriggersList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineTriggersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineTriggersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineTriggersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineTriggersOutputReference <a name="DataAwsccCodepipelinePipelineTriggersOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineTriggersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineTriggersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.gitConfiguration">GitConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.providerType">ProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers">DataAwsccCodepipelinePipelineTriggers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GitConfiguration`<sup>Required</sup> <a name="GitConfiguration" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.gitConfiguration"></a>

```go
func GitConfiguration() DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference">DataAwsccCodepipelinePipelineTriggersGitConfigurationOutputReference</a>

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.providerType"></a>

```go
func ProviderType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineTriggers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineTriggers">DataAwsccCodepipelinePipelineTriggers</a>

---


### DataAwsccCodepipelinePipelineVariablesList <a name="DataAwsccCodepipelinePipelineVariablesList" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCodepipelinePipelineVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.get"></a>

```go
func Get(index *f64) DataAwsccCodepipelinePipelineVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCodepipelinePipelineVariablesOutputReference <a name="DataAwsccCodepipelinePipelineVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccodepipelinepipeline"

dataawscccodepipelinepipeline.NewDataAwsccCodepipelinePipelineVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCodepipelinePipelineVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables">DataAwsccCodepipelinePipelineVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCodepipelinePipelineVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodepipelinePipeline.DataAwsccCodepipelinePipelineVariables">DataAwsccCodepipelinePipelineVariables</a>

---



