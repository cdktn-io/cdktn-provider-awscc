# `dataAwsccSagemakerModel` Submodule <a name="`dataAwsccSagemakerModel` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerModel <a name="DataAwsccSagemakerModel" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_model awscc_sagemaker_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModel(scope Construct, id *string, config DataAwsccSagemakerModelConfig) DataAwsccSagemakerModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig">DataAwsccSagemakerModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig">DataAwsccSagemakerModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerModel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.DataAwsccSagemakerModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.DataAwsccSagemakerModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.DataAwsccSagemakerModel_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.DataAwsccSagemakerModel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSagemakerModel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSagemakerModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSagemakerModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.containers">Containers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList">DataAwsccSagemakerModelContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.inferenceExecutionConfig">InferenceExecutionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference">DataAwsccSagemakerModelInferenceExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.modelArn">ModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.modelName">ModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.primaryContainer">PrimaryContainer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference">DataAwsccSagemakerModelPrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList">DataAwsccSagemakerModelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference">DataAwsccSagemakerModelVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.containers"></a>

```go
func Containers() DataAwsccSagemakerModelContainersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList">DataAwsccSagemakerModelContainersList</a>

---

##### `EnableNetworkIsolation`<sup>Required</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.enableNetworkIsolation"></a>

```go
func EnableNetworkIsolation() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `InferenceExecutionConfig`<sup>Required</sup> <a name="InferenceExecutionConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.inferenceExecutionConfig"></a>

```go
func InferenceExecutionConfig() DataAwsccSagemakerModelInferenceExecutionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference">DataAwsccSagemakerModelInferenceExecutionConfigOutputReference</a>

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.modelArn"></a>

```go
func ModelArn() *string
```

- *Type:* *string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.modelName"></a>

```go
func ModelName() *string
```

- *Type:* *string

---

##### `PrimaryContainer`<sup>Required</sup> <a name="PrimaryContainer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.primaryContainer"></a>

```go
func PrimaryContainer() DataAwsccSagemakerModelPrimaryContainerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference">DataAwsccSagemakerModelPrimaryContainerOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.tags"></a>

```go
func Tags() DataAwsccSagemakerModelTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList">DataAwsccSagemakerModelTagsList</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.vpcConfig"></a>

```go
func VpcConfig() DataAwsccSagemakerModelVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference">DataAwsccSagemakerModelVpcConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerModelConfig <a name="DataAwsccSagemakerModelConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_model#id DataAwsccSagemakerModel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerModelContainers <a name="DataAwsccSagemakerModelContainers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelContainers {

}
```


### DataAwsccSagemakerModelContainersImageConfig <a name="DataAwsccSagemakerModelContainersImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelContainersImageConfig {

}
```


### DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig <a name="DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig {

}
```


### DataAwsccSagemakerModelContainersModelDataSource <a name="DataAwsccSagemakerModelContainersModelDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelContainersModelDataSource {

}
```


### DataAwsccSagemakerModelContainersModelDataSourceS3DataSource <a name="DataAwsccSagemakerModelContainersModelDataSourceS3DataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSource {

}
```


### DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig <a name="DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig {

}
```


### DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig <a name="DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig {

}
```


### DataAwsccSagemakerModelContainersMultiModelConfig <a name="DataAwsccSagemakerModelContainersMultiModelConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelContainersMultiModelConfig {

}
```


### DataAwsccSagemakerModelInferenceExecutionConfig <a name="DataAwsccSagemakerModelInferenceExecutionConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelInferenceExecutionConfig {

}
```


### DataAwsccSagemakerModelPrimaryContainer <a name="DataAwsccSagemakerModelPrimaryContainer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelPrimaryContainer {

}
```


### DataAwsccSagemakerModelPrimaryContainerImageConfig <a name="DataAwsccSagemakerModelPrimaryContainerImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelPrimaryContainerImageConfig {

}
```


### DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig <a name="DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig {

}
```


### DataAwsccSagemakerModelPrimaryContainerModelDataSource <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelPrimaryContainerModelDataSource {

}
```


### DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource {

}
```


### DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig {

}
```


### DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig {

}
```


### DataAwsccSagemakerModelPrimaryContainerMultiModelConfig <a name="DataAwsccSagemakerModelPrimaryContainerMultiModelConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfig {

}
```


### DataAwsccSagemakerModelTags <a name="DataAwsccSagemakerModelTags" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelTags {

}
```


### DataAwsccSagemakerModelVpcConfig <a name="DataAwsccSagemakerModelVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

&dataawsccsagemakermodel.DataAwsccSagemakerModelVpcConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerModelContainersImageConfigOutputReference <a name="DataAwsccSagemakerModelContainersImageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelContainersImageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelContainersImageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.repositoryAccessMode">RepositoryAccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.repositoryAuthConfig">RepositoryAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference">DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfig">DataAwsccSagemakerModelContainersImageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryAccessMode`<sup>Required</sup> <a name="RepositoryAccessMode" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.repositoryAccessMode"></a>

```go
func RepositoryAccessMode() *string
```

- *Type:* *string

---

##### `RepositoryAuthConfig`<sup>Required</sup> <a name="RepositoryAuthConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.repositoryAuthConfig"></a>

```go
func RepositoryAuthConfig() DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference">DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelContainersImageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfig">DataAwsccSagemakerModelContainersImageConfig</a>

---


### DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference <a name="DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn">RepositoryCredentialsProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig">DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryCredentialsProviderArn`<sup>Required</sup> <a name="RepositoryCredentialsProviderArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn"></a>

```go
func RepositoryCredentialsProviderArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig">DataAwsccSagemakerModelContainersImageConfigRepositoryAuthConfig</a>

---


### DataAwsccSagemakerModelContainersList <a name="DataAwsccSagemakerModelContainersList" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelContainersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerModelContainersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerModelContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerModelContainersModelDataSourceOutputReference <a name="DataAwsccSagemakerModelContainersModelDataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelContainersModelDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelContainersModelDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSource">DataAwsccSagemakerModelContainersModelDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.s3DataSource"></a>

```go
func S3DataSource() DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelContainersModelDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSource">DataAwsccSagemakerModelContainersModelDataSource</a>

---


### DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference <a name="DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn">HubContentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HubContentArn`<sup>Required</sup> <a name="HubContentArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn"></a>

```go
func HubContentArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfig</a>

---


### DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference <a name="DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula">AcceptEula</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula"></a>

```go
func AcceptEula() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfig</a>

---


### DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference <a name="DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig">HubAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3DataType">S3DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSource">DataAwsccSagemakerModelContainersModelDataSourceS3DataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `HubAccessConfig`<sup>Required</sup> <a name="HubAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig"></a>

```go
func HubAccessConfig() DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceHubAccessConfigOutputReference</a>

---

##### `ModelAccessConfig`<sup>Required</sup> <a name="ModelAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig"></a>

```go
func ModelAccessConfig() DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference">DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceModelAccessConfigOutputReference</a>

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3DataType"></a>

```go
func S3DataType() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelContainersModelDataSourceS3DataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceS3DataSource">DataAwsccSagemakerModelContainersModelDataSourceS3DataSource</a>

---


### DataAwsccSagemakerModelContainersMultiModelConfigOutputReference <a name="DataAwsccSagemakerModelContainersMultiModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelContainersMultiModelConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelContainersMultiModelConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.modelCacheSetting">ModelCacheSetting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfig">DataAwsccSagemakerModelContainersMultiModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelCacheSetting`<sup>Required</sup> <a name="ModelCacheSetting" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.modelCacheSetting"></a>

```go
func ModelCacheSetting() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelContainersMultiModelConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfig">DataAwsccSagemakerModelContainersMultiModelConfig</a>

---


### DataAwsccSagemakerModelContainersOutputReference <a name="DataAwsccSagemakerModelContainersOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelContainersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerModelContainersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.containerHostname">ContainerHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference">DataAwsccSagemakerModelContainersImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.inferenceSpecificationName">InferenceSpecificationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.modelDataSource">ModelDataSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference">DataAwsccSagemakerModelContainersModelDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.modelDataUrl">ModelDataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.modelPackageName">ModelPackageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.multiModelConfig">MultiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference">DataAwsccSagemakerModelContainersMultiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainers">DataAwsccSagemakerModelContainers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerHostname`<sup>Required</sup> <a name="ContainerHostname" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.containerHostname"></a>

```go
func ContainerHostname() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `ImageConfig`<sup>Required</sup> <a name="ImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.imageConfig"></a>

```go
func ImageConfig() DataAwsccSagemakerModelContainersImageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersImageConfigOutputReference">DataAwsccSagemakerModelContainersImageConfigOutputReference</a>

---

##### `InferenceSpecificationName`<sup>Required</sup> <a name="InferenceSpecificationName" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.inferenceSpecificationName"></a>

```go
func InferenceSpecificationName() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `ModelDataSource`<sup>Required</sup> <a name="ModelDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.modelDataSource"></a>

```go
func ModelDataSource() DataAwsccSagemakerModelContainersModelDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersModelDataSourceOutputReference">DataAwsccSagemakerModelContainersModelDataSourceOutputReference</a>

---

##### `ModelDataUrl`<sup>Required</sup> <a name="ModelDataUrl" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.modelDataUrl"></a>

```go
func ModelDataUrl() *string
```

- *Type:* *string

---

##### `ModelPackageName`<sup>Required</sup> <a name="ModelPackageName" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.modelPackageName"></a>

```go
func ModelPackageName() *string
```

- *Type:* *string

---

##### `MultiModelConfig`<sup>Required</sup> <a name="MultiModelConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.multiModelConfig"></a>

```go
func MultiModelConfig() DataAwsccSagemakerModelContainersMultiModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersMultiModelConfigOutputReference">DataAwsccSagemakerModelContainersMultiModelConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelContainers
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelContainers">DataAwsccSagemakerModelContainers</a>

---


### DataAwsccSagemakerModelInferenceExecutionConfigOutputReference <a name="DataAwsccSagemakerModelInferenceExecutionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelInferenceExecutionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelInferenceExecutionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfig">DataAwsccSagemakerModelInferenceExecutionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelInferenceExecutionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelInferenceExecutionConfig">DataAwsccSagemakerModelInferenceExecutionConfig</a>

---


### DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode">RepositoryAccessMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfig">RepositoryAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfig">DataAwsccSagemakerModelPrimaryContainerImageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryAccessMode`<sup>Required</sup> <a name="RepositoryAccessMode" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode"></a>

```go
func RepositoryAccessMode() *string
```

- *Type:* *string

---

##### `RepositoryAuthConfig`<sup>Required</sup> <a name="RepositoryAuthConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAuthConfig"></a>

```go
func RepositoryAuthConfig() DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelPrimaryContainerImageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfig">DataAwsccSagemakerModelPrimaryContainerImageConfig</a>

---


### DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn">RepositoryCredentialsProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryCredentialsProviderArn`<sup>Required</sup> <a name="RepositoryCredentialsProviderArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.repositoryCredentialsProviderArn"></a>

```go
func RepositoryCredentialsProviderArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig">DataAwsccSagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig</a>

---


### DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSource">S3DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSource">DataAwsccSagemakerModelPrimaryContainerModelDataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3DataSource`<sup>Required</sup> <a name="S3DataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.s3DataSource"></a>

```go
func S3DataSource() DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelPrimaryContainerModelDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSource">DataAwsccSagemakerModelPrimaryContainerModelDataSource</a>

---


### DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn">HubContentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HubContentArn`<sup>Required</sup> <a name="HubContentArn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.hubContentArn"></a>

```go
func HubContentArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfig</a>

---


### DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula">AcceptEula</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceptEula`<sup>Required</sup> <a name="AcceptEula" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.acceptEula"></a>

```go
func AcceptEula() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig</a>

---


### DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionType">CompressionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig">HubAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig">ModelAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType">S3DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompressionType`<sup>Required</sup> <a name="CompressionType" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.compressionType"></a>

```go
func CompressionType() *string
```

- *Type:* *string

---

##### `HubAccessConfig`<sup>Required</sup> <a name="HubAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.hubAccessConfig"></a>

```go
func HubAccessConfig() DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceHubAccessConfigOutputReference</a>

---

##### `ModelAccessConfig`<sup>Required</sup> <a name="ModelAccessConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.modelAccessConfig"></a>

```go
func ModelAccessConfig() DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference</a>

---

##### `S3DataType`<sup>Required</sup> <a name="S3DataType" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3DataType"></a>

```go
func S3DataType() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource">DataAwsccSagemakerModelPrimaryContainerModelDataSourceS3DataSource</a>

---


### DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSetting">ModelCacheSetting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfig">DataAwsccSagemakerModelPrimaryContainerMultiModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelCacheSetting`<sup>Required</sup> <a name="ModelCacheSetting" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.modelCacheSetting"></a>

```go
func ModelCacheSetting() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelPrimaryContainerMultiModelConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfig">DataAwsccSagemakerModelPrimaryContainerMultiModelConfig</a>

---


### DataAwsccSagemakerModelPrimaryContainerOutputReference <a name="DataAwsccSagemakerModelPrimaryContainerOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelPrimaryContainerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelPrimaryContainerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.containerHostname">ContainerHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.imageConfig">ImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationName">InferenceSpecificationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.modelDataSource">ModelDataSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.modelDataUrl">ModelDataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.modelPackageName">ModelPackageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.multiModelConfig">MultiModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainer">DataAwsccSagemakerModelPrimaryContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerHostname`<sup>Required</sup> <a name="ContainerHostname" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.containerHostname"></a>

```go
func ContainerHostname() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `ImageConfig`<sup>Required</sup> <a name="ImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.imageConfig"></a>

```go
func ImageConfig() DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerImageConfigOutputReference</a>

---

##### `InferenceSpecificationName`<sup>Required</sup> <a name="InferenceSpecificationName" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.inferenceSpecificationName"></a>

```go
func InferenceSpecificationName() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `ModelDataSource`<sup>Required</sup> <a name="ModelDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.modelDataSource"></a>

```go
func ModelDataSource() DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference">DataAwsccSagemakerModelPrimaryContainerModelDataSourceOutputReference</a>

---

##### `ModelDataUrl`<sup>Required</sup> <a name="ModelDataUrl" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.modelDataUrl"></a>

```go
func ModelDataUrl() *string
```

- *Type:* *string

---

##### `ModelPackageName`<sup>Required</sup> <a name="ModelPackageName" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.modelPackageName"></a>

```go
func ModelPackageName() *string
```

- *Type:* *string

---

##### `MultiModelConfig`<sup>Required</sup> <a name="MultiModelConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.multiModelConfig"></a>

```go
func MultiModelConfig() DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference">DataAwsccSagemakerModelPrimaryContainerMultiModelConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelPrimaryContainer
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelPrimaryContainer">DataAwsccSagemakerModelPrimaryContainer</a>

---


### DataAwsccSagemakerModelTagsList <a name="DataAwsccSagemakerModelTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSagemakerModelTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSagemakerModelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSagemakerModelTagsOutputReference <a name="DataAwsccSagemakerModelTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSagemakerModelTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTags">DataAwsccSagemakerModelTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelTags">DataAwsccSagemakerModelTags</a>

---


### DataAwsccSagemakerModelVpcConfigOutputReference <a name="DataAwsccSagemakerModelVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsagemakermodel"

dataawsccsagemakermodel.NewDataAwsccSagemakerModelVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSagemakerModelVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfig">DataAwsccSagemakerModelVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSagemakerModelVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerModel.DataAwsccSagemakerModelVpcConfig">DataAwsccSagemakerModelVpcConfig</a>

---



